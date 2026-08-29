import fs from 'node:fs';
import path from 'node:path';
import { SITE_URL, getSitemapRoutes, rootDir } from './site-config.mjs';

const lastmod = new Date().toISOString().slice(0, 10);

const routeMeta = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/fixes': { changefreq: 'monthly', priority: '0.6' },
};

function getMeta(route) {
  if (routeMeta[route]) return routeMeta[route];
  if (route.startsWith('/caso-de-estudio/')) {
    return { changefreq: 'monthly', priority: '0.8' };
  }
  return { changefreq: 'monthly', priority: '0.5' };
}

function buildUrlEntry(route) {
  const { changefreq, priority } = getMeta(route);
  const loc = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;

  const hreflang =
    route === '/'
      ? `
    <xhtml:link rel="alternate" hreflang="es" href="${SITE_URL}/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`
      : '';

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${hreflang}
  </url>`;
}

const routes = getSitemapRoutes();
const urlEntries = routes.map(buildUrlEntry).join('\n\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;

const publicPath = path.join(rootDir, 'public/sitemap.xml');
fs.writeFileSync(publicPath, sitemap, 'utf8');

console.log(`Sitemap generado: ${publicPath}`);
console.log(`  ${routes.length} URLs (${routes.filter((r) => r.startsWith('/caso-de-estudio')).length} casos de estudio)`);
