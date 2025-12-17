import sharp from 'sharp';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const LOGO_PATH = join(__dirname, '../public/assets/Sanchez (2).png');
const PUBLIC_DIR = join(__dirname, '../public');

// Icon sizes to generate
const ICON_SIZES = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
];

async function generateIcons() {
  console.log('🎨 Starting icon generation...\n');

  // Generate PNG icons
  for (const { name, size } of ICON_SIZES) {
    const outputPath = join(PUBLIC_DIR, name);

    try {
      await sharp(LOGO_PATH)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);

      console.log(`  ✓ Generated ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`  ✗ Error generating ${name}:`, error.message);
    }
  }

  // Generate favicon.ico (32x32 PNG, will be served as ICO)
  try {
    const faviconPath = join(PUBLIC_DIR, 'favicon.ico');
    await sharp(LOGO_PATH)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(faviconPath);

    console.log(`  ✓ Generated favicon.ico (32x32)`);
  } catch (error) {
    console.error(`  ✗ Error generating favicon.ico:`, error.message);
  }

  // Generate PWA manifest
  const manifest = {
    name: "Sanchez Legacy Roofing",
    short_name: "SLR",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    theme_color: "#f4b434",
    background_color: "#ffffff",
    display: "standalone"
  };

  const manifestPath = join(PUBLIC_DIR, 'site.webmanifest');
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`  ✓ Generated site.webmanifest`);

  console.log('\n✅ Icon generation complete!\n');
  console.log(`Icons saved to: ${PUBLIC_DIR}`);
}

// Run icon generation
generateIcons().catch(console.error);
