import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MAP = {
  '1ST IMG.png': 'cc-01-trio-matcha.webp',
  '2ND IMG.png': 'cc-02-duo-star.webp',
  '3RD IMG.png': 'cc-03-trio-street.webp',
  '4TH IMG.png': 'cc-04-star-cheek.webp',
  '5TH IMG.png': 'cc-05-trio-low.webp',
  '6TH IMG.png': 'cc-06-star-night.webp',
  '7TH IMG.png': 'cc-07-phone-matcha.webp',
  '8TH IMG.png': 'cc-08-trio-night.webp',
  '9TH IMG.png': 'cc-09-trio-sky.webp',
  '10TH IMG.png': 'cc-10-sip-sun.webp',
  '11TH IMG.png': 'cc-11-sip-beanie.webp',
  '13TH IMG.png': 'cc-13-duo-train.webp',
  '14TH IMG.png': 'cc-14-star-hold.webp',
  '15TH IMG.png': 'cc-15-duo-star.webp'
};

const SRC_DIR = path.join(__dirname, 'CHEEKY-PHOTOSHOOT');
const DEST_DIR = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

async function processImages() {
  for (const [orig, newName] of Object.entries(MAP)) {
    const srcPath = path.join(SRC_DIR, orig);
    const destPath = path.join(DEST_DIR, newName);
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath)
        .webp({ quality: 80 })
        .toFile(destPath);
      console.log(`Converted ${orig} -> ${newName}`);
    } else {
      console.warn(`File not found: ${srcPath}`);
    }
  }
}

processImages().catch(console.error);
