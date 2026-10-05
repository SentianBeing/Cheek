import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'public/images/Other assets';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

async function createContactSheet() {
  const images = [];
  let index = 0;
  for (const file of files) {
    const p = path.join(dir, file);
    const resized = await sharp(p).resize(200, 180, { fit: 'contain' }).toBuffer();
    
    const svgText = `
      <svg width="200" height="20">
        <rect width="200" height="20" fill="white" />
        <text x="5" y="15" font-family="Arial" font-size="10" fill="black">${file.substring(0, 8)}</text>
      </svg>
    `;
    const textBuffer = Buffer.from(svgText);

    const top = Math.floor(index / 5) * 200;
    const left = (index % 5) * 200;
    
    images.push({ input: resized, top, left });
    images.push({ input: textBuffer, top: top + 180, left });
    
    index++;
  }

  const height = Math.ceil(files.length / 5) * 200;
  const outPath = 'C:\\Users\\karth\\.gemini\\antigravity-ide\\brain\\b377802f-c90d-4f8e-84b0-fe1f695e55ef\\scratch\\contact-sheet.jpg';
  
  if (!fs.existsSync(path.dirname(outPath))) {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
  }

  await sharp({
    create: {
      width: 1000,
      height,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite(images)
  .toFile(outPath);
  
  console.log("Contact sheet created at", outPath);
}

createContactSheet().catch(console.error);
