import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

export const SITE_URL = 'https://www.agarucorp.com';

/** Rutas estáticas indexables (sin preview interno ni 404). */
export const STATIC_ROUTES = ['/', '/fixes'];

export function getProjectSlugs() {
  const projectsFile = path.join(rootDir, 'src/data/projects.ts');
  const content = fs.readFileSync(projectsFile, 'utf8');
  return [...content.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);
}

export function getSitemapRoutes() {
  const caseStudyRoutes = getProjectSlugs().map((slug) => `/caso-de-estudio/${slug}`);
  return [...STATIC_ROUTES, ...caseStudyRoutes];
}

export function getPrerenderRoutes() {
  return getSitemapRoutes();
}

export { rootDir };
