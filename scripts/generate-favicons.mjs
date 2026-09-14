import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const root = process.cwd();
const src = path.join(root, 'public', 'pic redes.png');
const outDir = path.join(root, 'public');

function pngToIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + 16 * count;
  let offset = headerSize;
  const entries = pngBuffers.map((buf) => {
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    const entry = { buf, width, height, offset, size: buf.length };
    offset += buf.length;
    return entry;
  });

  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);

  let cursor = 6;
  for (const entry of entries) {
    out.writeUInt8(entry.width >= 256 ? 0 : entry.width, cursor);
    out.writeUInt8(entry.height >= 256 ? 0 : entry.height, cursor + 1);
    out.writeUInt8(0, cursor + 2);
    out.writeUInt8(0, cursor + 3);
    out.writeUInt16LE(1, cursor + 4);
    out.writeUInt16LE(32, cursor + 6);
    out.writeUInt32LE(entry.size, cursor + 8);
    out.writeUInt32LE(entry.offset, cursor + 12);
    cursor += 16;
  }

  for (const entry of entries) {
    entry.buf.copy(out, entry.offset);
  }
  return out;
}

async function raster(size) {
  return sharp(src)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    })
    .flatten({ background: '#000000' })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function writePng(name, size) {
  const buf = await raster(size);
  const file = path.join(outDir, name);
  await fs.promises.writeFile(file, buf);
  console.log(`Wrote public/${name} (${size}x${size})`);
  return buf;
}

const png16 = await writePng('favicon-16x16.png', 16);
const png32 = await writePng('favicon-32x32.png', 32);
const png48 = await writePng('favicon-48x48.png', 48);
await writePng('apple-touch-icon.png', 180);
await writePng('android-chrome-192x192.png', 192);
await writePng('android-chrome-512x512.png', 512);
await writePng('mstile-150x150.png', 150);

const ico = pngToIco([png16, png32, png48]);
await fs.promises.writeFile(path.join(outDir, 'favicon.ico'), ico);
console.log('Wrote public/favicon.ico');
