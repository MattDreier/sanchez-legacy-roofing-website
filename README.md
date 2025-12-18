# Sanchez Legacy Roofing

A production website for Sanchez Legacy Roofing built with React, TypeScript, and Vite. Deployed on GitHub Pages with a custom domain.

🌐 **Live**: [sanchezlegacyroofing.com](https://sanchezlegacyroofing.com)

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Framer Motion (animations)
- GitHub Pages (hosting)
- GitHub Actions (CI/CD)

## Performance Optimizations

- **Images**: Converted to WebP format with automated optimization pipeline (30-50% size reduction)
- **Code Splitting**: Lazy loading and dynamic imports to reduce initial bundle size
- **Fonts**: Async loading with `font-display: swap` to prevent render blocking
- **Build**: Minification, tree shaking, and optimized chunk splitting via Vite

**Core Web Vitals targets:**
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

- `npm run optimize-images` - Convert and optimize images to WebP
- `npm run generate-icons` - Generate favicon variations

## Project Structure

```
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── CallToAction.tsx
│   └── Footer.tsx
├── public/
│   ├── assets/         # Optimized images
│   └── CNAME          # Custom domain config
├── scripts/
│   ├── optimize-images.js
│   └── generate-icons.js
├── App.tsx
├── index.tsx
└── vite.config.ts
```

## Deployment

Automatically deploys to GitHub Pages on push to `main` via GitHub Actions.

### Custom Domain Setup

**DNS Configuration (GoDaddy):**

A Records for apex domain:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

CNAME for www subdomain:
```
www → sanchezlegacyroofing.com
```

**GitHub Pages:**
- Custom domain: `sanchezlegacyroofing.com`
- HTTPS enforced (Let's Encrypt)
- Build source: GitHub Actions

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## License

© 2024 Sanchez Legacy Roofing. All rights reserved.
