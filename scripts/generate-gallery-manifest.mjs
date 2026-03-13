import { promises as fs } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const galleryDir = path.join(rootDir, 'public', 'gallery');
const outputFile = path.join(galleryDir, 'gallery.json');

const ALLOWED_EXTENSIONS = new Set([
  '.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif', '.jfif',
  '.JPG', '.JPEG', '.PNG', '.WEBP', '.GIF', '.AVIF', '.JFIF',
]);

async function generateGalleryManifest() {
  try {
    await fs.mkdir(galleryDir, { recursive: true });
    const entries = await fs.readdir(galleryDir, { withFileTypes: true });

    const images = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => ALLOWED_EXTENSIONS.has(path.extname(name)))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((name, index) => ({
        src: `/gallery/${name}`,
        alt: `Past traveler photo ${index + 1}`,
      }));

    await fs.writeFile(outputFile, `${JSON.stringify(images, null, 2)}\n`, 'utf8');
    console.log(`Gallery manifest generated: ${images.length} image(s).`);
  } catch (error) {
    console.error('Failed to generate gallery manifest:', error);
    process.exitCode = 1;
  }
}

generateGalleryManifest();
