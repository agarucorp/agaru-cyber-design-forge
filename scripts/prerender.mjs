import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { getPrerenderRoutes, rootDir } from './site-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(rootDir, 'dist');
const PREVIEW_PORT = 4173;
const PREVIEW_URL = `http://localhost:${PREVIEW_PORT}`;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // server not ready yet
    }
    await wait(400);
  }
  throw new Error(`Preview server did not start at ${url}`);
}

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    const child = spawn('npx', ['vite', 'preview', '--port', String(PREVIEW_PORT), '--strictPort'], {
      cwd: rootDir,
      shell: process.platform === 'win32',
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let stderr = '';

    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });

    child.on('error', reject);

    resolve({
      child,
      ready: waitForServer(PREVIEW_URL),
      stderr: () => stderr,
    });
  });
}

function routeToFile(route) {
  if (route === '/') return path.join(distDir, 'index.html');
  const segments = route.replace(/^\//, '').split('/');
  return path.join(distDir, ...segments, 'index.html');
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  try {
    await page.goto(`${PREVIEW_URL}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });
    // Helmet + animaciones iniciales
    await wait(800);

    const html = await page.content();
    const outFile = routeToFile(route);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html, 'utf8');
    console.log(`  ✓ ${route} → ${path.relative(rootDir, outFile)}`);
  } finally {
    await page.close();
  }
}

async function launchBrowser() {
  if (process.env.VERCEL === '1') {
    const chromium = (await import('@sparticuz/chromium')).default;
    const puppeteer = await import('puppeteer-core');
    return puppeteer.default.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }

  const puppeteer = await import('puppeteer');
  return puppeteer.default.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
}

async function main() {
  if (process.env.SKIP_PRERENDER === '1') {
    console.log('Prerender omitido (SKIP_PRERENDER=1)');
    return;
  }

  if (!fs.existsSync(distDir)) {
    throw new Error('dist/ no existe. Ejecutá "vite build" antes del prerender.');
  }

  const routes = getPrerenderRoutes();
  console.log(`Pre-renderizando ${routes.length} rutas…`);

  const { child, ready, stderr } = await startPreviewServer();

  try {
    await ready;
    const browser = await launchBrowser();

    try {
      for (const route of routes) {
        await prerenderRoute(browser, route);
      }
    } finally {
      await browser.close();
    }

    console.log('Pre-render completado.');
  } catch (error) {
    console.error(stderr());
    throw error;
  } finally {
    child.kill('SIGTERM');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
