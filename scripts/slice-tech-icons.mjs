#!/usr/bin/env node
/**
 * Slices a composite 2x4 grid image into individual icon assets.
 * Assumptions:
 *  - Source image path: src/assets/raw/cyberpunk-tech-grid.png (place it there first)
 *  - Layout: 2 rows, 4 columns (total 8 tiles)
 *  - Uniform tile sizes (computed from image metadata)
 *  - Output: src/assets/tech/*.webp + *.png fallback
 *  - Adds simple optimization (quality & lossless where appropriate)
 *
 * Usage:
 *   node scripts/slice-tech-icons.mjs
 *
 *
 * Optional flags:
 *   --source <path>   Override source image
 *   --prefix <name>   Filename prefix (default: tech)
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const args = process.argv.slice(2);
const getArg = (flag, fallback) => {
  const i = args.indexOf(flag);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const SOURCE = getArg('--source', 'src/assets/raw/cyberpunk-tech-grid.png');
const PREFIX = getArg('--prefix', 'tech');
const OUT_DIR = 'src/assets/tech';

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

// Mapping for corrected labels (row-major order)
const labels = [
  'power-apps',
  'power-automate',
  'dataverse',
  'react',
  'azure',
  'javascript',
  'nodejs',
  'microsoft-graph'
];

async function slice() {
  if (!fs.existsSync(SOURCE)) {
    console.error(`Source image not found: ${SOURCE}`);
    process.exit(1);
  }
  await ensureDir(OUT_DIR);

  const image = sharp(SOURCE);
  const meta = await image.metadata();
  const { width, height } = meta;
  if (!width || !height) {
    throw new Error('Unable to read image dimensions');
  }
  const rows = 2;
  const cols = 4;
  const tileW = Math.floor(width / cols);
  const tileH = Math.floor(height / rows);

  console.log(`Slicing ${SOURCE} -> ${rows*cols} tiles (${tileW}x${tileH})`);

  const tasks = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c;
      const label = labels[idx] || `${PREFIX}-${idx+1}`;
      const left = c * tileW;
      const top = r * tileH;

      const base = path.join(OUT_DIR, `${label}`);

      const extractRegion = { left, top, width: tileW, height: tileH };

      // WebP (primary)
      tasks.push(
        image.clone().extract(extractRegion).webp({ quality: 82, effort: 4 }).toFile(`${base}.webp`)
      );
      // PNG fallback (optimized)
      tasks.push(
        image.clone().extract(extractRegion).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(`${base}.png`)
      );
    }
  }
  await Promise.all(tasks);
  console.log('Done. Files written to', OUT_DIR);
}

slice().catch(err => {
  console.error(err);
  process.exit(1);
});
