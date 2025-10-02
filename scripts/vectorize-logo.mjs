// Vectoriza public/Vector.png y genera SVG + PNG alta resolución
// Requisitos: sharp, potrace, svgo

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { Potrace } from 'potrace';

const root = process.cwd();
const inputPng = path.join(root, 'public', 'Vector.png');
const outSvg = path.join(root, 'public', 'Vector.svg');
const outPng = path.join(root, 'public', 'Vector-4000.png');

async function preprocessForTrace(inputPath) {
  // Convierte a monocromo de alto contraste para trazado limpio
  const buf = await sharp(inputPath)
    .removeAlpha() // evita ruido del canal alfa en el umbral
    .grayscale()
    .normalize()
    .linear(1.2, -10) // aumenta contraste
    .threshold(220) // eleva a blanco/negro (ajustable)
    .toBuffer();
  return buf;
}

function traceToSvg(buffer) {
  return new Promise((resolve, reject) => {
    const tracer = new Potrace({
      threshold: 200, // ya umbralizamos, esto es de seguridad
      turdSize: 2,
      turnPolicy: Potrace.TURNPOLICY_MAJORITY,
      optCurve: true,
      optTolerance: 0.2,
      color: '#FFFFFF', // relleno blanco como el logo original
      background: 'transparent',
    });
    tracer.loadImageFromBuffer(buffer, (err) => {
      if (err) return reject(err);
      tracer.getSVG((err2, svg) => {
        if (err2) return reject(err2);
        resolve(svg);
      });
    });
  });
}

async function writeFileSafe(filePath, contents) {
  await fs.promises.writeFile(filePath, contents);
  const rel = path.relative(root, filePath);
  console.log(`Wrote: ${rel}`);
}

async function renderPngFromSvg(svgString, outPath, width = 4000) {
  const png = await sharp(Buffer.from(svgString))
    .resize({ width, withoutEnlargement: false })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
  await fs.promises.writeFile(outPath, png);
  const rel = path.relative(root, outPath);
  console.log(`Wrote: ${rel}`);
}

async function main() {
  if (!fs.existsSync(inputPng)) {
    throw new Error(`No se encontró ${inputPng}. Asegurate de que exista public/Vector.png`);
  }
  console.log('Preprocesando para vectorizar...');
  const pre = await preprocessForTrace(inputPng);
  console.log('Trazando a SVG...');
  const svg = await traceToSvg(pre);

  // Optimización simple del SVG (remueve dimensiones fijas, mantiene viewBox)
  const optimized = svg
    .replace(/fill="#[0-9A-Fa-f]{6}"/g, 'fill="#FFFFFF"')
    .replace(/stroke="#[0-9A-Fa-f]{6}"/g, 'stroke="none"')
    .replace(/<svg /, '<svg role="img" aria-label="AgaruCorp Logotype" ');

  await writeFileSafe(outSvg, optimized);
  console.log('Renderizando PNG 4000px...');
  await renderPngFromSvg(optimized, outPng, 4000);
  console.log('Listo. Archivos generados en public/: Vector.svg y Vector-4000.png');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});



