import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, parse } from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, '../public/assets');
const OPTIMIZED_DIR = join(__dirname, '../public/assets/optimized');
const WEBP_QUALITY = 85;

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  // Create optimized directory if it doesn't exist
  if (!existsSync(OPTIMIZED_DIR)) {
    await mkdir(OPTIMIZED_DIR, { recursive: true });
    console.log('✓ Created optimized assets directory');
  }

  // Read all files from assets directory
  const files = await readdir(ASSETS_DIR);

  // Filter for image files
  const imageFiles = files.filter(file => {
    const ext = parse(file).ext.toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });

  console.log(`\nFound ${imageFiles.length} images to optimize:\n`);

  for (const file of imageFiles) {
    const inputPath = join(ASSETS_DIR, file);
    const { name } = parse(file);

    // Special handling: Rename "Sanchez (2).png" to "logo.png"
    const outputName = file === 'Sanchez (2).png' ? 'logo' : name;
    const outputPath = join(OPTIMIZED_DIR, `${outputName}.webp`);

    try {
      // Get original file stats
      const inputStats = await sharp(inputPath).metadata();
      const originalSize = (await sharp(inputPath).toBuffer()).length;

      // Convert to WebP
      await sharp(inputPath)
        .webp({ quality: WEBP_QUALITY })
        .toFile(outputPath);

      // Get optimized file stats
      const optimizedStats = await sharp(outputPath).metadata();
      const optimizedSize = (await sharp(outputPath).toBuffer()).length;

      const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      const sizeMB = (optimizedSize / 1024 / 1024).toFixed(2);

      console.log(`  ✓ ${file}`);
      console.log(`    → ${outputName}.webp`);
      console.log(`    ${(originalSize / 1024).toFixed(0)}KB → ${(optimizedSize / 1024).toFixed(0)}KB (${reduction}% reduction)`);
      console.log(`    Dimensions: ${inputStats.width}x${inputStats.height}\n`);

    } catch (error) {
      console.error(`  ✗ Error processing ${file}:`, error.message);
    }
  }

  console.log('✅ Image optimization complete!\n');
  console.log(`Optimized images saved to: ${OPTIMIZED_DIR}`);
}

// Run optimization
optimizeImages().catch(console.error);
