# Performance Optimization Implementation Plan

**Created:** December 17, 2025
**Last Updated:** December 17, 2025 (Implementation in progress)
**Status:** ⚠️ Phases 0-1 Complete | Phase 2 Deferred | Phases 3-5 Next

---

## 📊 Implementation Status

**Completed Phases:**
- ✅ **Phase 0:** Infrastructure setup (scripts, configs, optimized assets)
- ✅ **Phase 1:** SEO improvements (91 → 100 score, structured data, favicons)

**Deferred Phases:**
- ⏸️ **Phase 2:** Tailwind build process (DEFERRED - see notes below)

**Remaining Phases:**
- ⏳ **Phase 3:** Image optimization (WebP conversion)
- ⏳ **Phase 4:** Code splitting & lazy loading
- ⏳ **Phase 5:** Font loading optimization
- ⏳ **Phase 6:** Final performance audit

**Current Results:**
- SEO: 91 → 100 ✅ (+9 points)
- Infrastructure: All optimization tools created ✅
- Site: Stable and functional ✅

**Expected Results After Remaining Phases:**
- Performance: 67 → 86-89 (without Phase 2)
- LCP: 8.4s → 3.2s (62% faster)
- Page weight: 4.0 MB → ~900KB (still excellent!)

---

## Executive Summary

### What Happened
The site broke after performance optimizations were deployed because the `dist/` folder (auto-generated build output) was force-committed to git. This created a conflict with the GitHub Actions deployment workflow, resulting in 404 errors on JavaScript bundles.

### Root Cause
The GitHub Actions workflow at `.github/workflows/deploy.yml` is designed to:
1. Build `dist/` fresh from source on every deployment
2. Upload the newly built `dist/` as a GitHub Pages artifact
3. Serve that artifact at www.sanchezlegacyroofing.com

When `dist/` was committed to git (commit 240c824), it caused asset hash mismatches:
- Git had files with one set of hashes (e.g., `index-ABC123.js`)
- GitHub Actions rebuilt with different hashes (e.g., `index-XYZ789.js`)
- The HTML referenced one set, but the server served different files
- Result: **404 errors**

### The Good News
The performance optimizations themselves were **excellent** and achieved:
- Performance score: 67 → 89 (+32.8%)
- LCP: 8.4s → 3.2s (62% faster)
- FCP: 3.4s → 2.7s (21% faster)
- SEO: 91 → 100 (perfect)
- Page weight: 4.0 MB → 550 KB (86% reduction)
- CSS: 3.4 MB → 7 KB (99.8% reduction)

### The Solution
Re-apply all 7 optimizations incrementally, testing each phase before moving to the next.

**Critical Rule:** ✅ Modify source files only | ❌ Never commit `dist/` (let the workflow build it)

---

## Implementation Phases

### Phase 0: Foundation Setup ✅ COMPLETED

**Status:** Successfully deployed (commits c49bbcf, 0b85965)
**Date:** December 17, 2025

**What Was Completed:**
1. Created `scripts/optimize-images.js` - Converts JPEGs to WebP (85% quality)
2. Created `scripts/generate-icons.js` - Generates favicon set + PWA manifest
3. Created `tailwind.config.js` - Full Tailwind configuration
4. Created `postcss.config.js` - PostCSS with Tailwind + Autoprefixer
5. Created `index.css` - Tailwind directives + custom styles (moved to root)
6. Updated `package.json` - Added scripts and dependencies
7. Installed dependencies: sharp, tailwindcss, @tailwindcss/postcss, postcss, autoprefixer

**Assets Generated:**
- 7 optimized WebP images in `public/assets/optimized/` (~390KB total, avg 41% reduction)
- 4 favicon files (16x16, 32x32, 180x180, .ico)
- PWA manifest (`site.webmanifest`)

**Results:**
- ✅ All infrastructure in place for Phases 2-5
- ✅ Build succeeds with new configuration
- ✅ Images ready for Phase 3

---

### Phase 1: SEO Improvements ✅ COMPLETED

**Status:** Successfully deployed (commits c49bbcf, 0b85965)
**Date:** December 17, 2025

**Risk Level:** LOW - Can't break functionality

**Files to modify:**
- `index.html`

**Changes:**

1. **Add SEO meta tags** (add to `<head>` after viewport):
```html
<!-- SEO Meta Tags -->
<meta name="description" content="Professional roofing services in Oklahoma City, OK. Residential & commercial roof installation, repair, solar, and gutter services. Free damage inspections. Licensed, insured, and locally trusted. Call (405) 318-3391 for a quote!">

<!-- Open Graph / Social Media -->
<meta property="og:title" content="Sanchez Legacy Roofing - Expert Roofing Services in Oklahoma City">
<meta property="og:description" content="Professional roofing installation, repair, solar, and gutter services. Free damage inspections. Serving Oklahoma City with quality craftsmanship.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.sanchezlegacyroofing.com">
<meta property="og:image" content="https://www.sanchezlegacyroofing.com/assets/logo.png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Sanchez Legacy Roofing - Expert Roofing Services">
<meta name="twitter:description" content="Professional roofing installation, repair & maintenance. Free damage inspections in Oklahoma City.">
<meta name="twitter:image" content="https://www.sanchezlegacyroofing.com/assets/logo.png">

<!-- Canonical URL -->
<link rel="canonical" href="https://www.sanchezlegacyroofing.com">
```

2. **Add structured data JSON-LD** (add before closing `</head>`):
```html
<!-- Structured Data (JSON-LD) for Local Business SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Sanchez Legacy Roofing",
  "image": "https://www.sanchezlegacyroofing.com/assets/logo.png",
  "@id": "https://www.sanchezlegacyroofing.com",
  "url": "https://www.sanchezlegacyroofing.com",
  "telephone": "+1-405-318-3391",
  "areaServed": {
    "@type": "City",
    "name": "Oklahoma City",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Oklahoma City",
      "addressRegion": "OK",
      "addressCountry": "US"
    }
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  "priceRange": "$$",
  "sameAs": ["https://www.instagram.com/sanchezlegacyroofing"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Roofing",
          "description": "Professional residential roof installation, repair, and maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Repair",
          "description": "Expert roof repair services for all roofing types"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solar Installation",
          "description": "Residential solar panel installation and integration"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gutter Services",
          "description": "Gutter installation, repair, and maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Damage Inspection",
          "description": "Complimentary roof damage inspection and assessment"
        }
      }
    ]
  }
}
</script>
```

3. **Add favicon references** (add after `<title>`):
```html
<!-- Favicon & App Icons -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#f4b434">
```

**Testing:**
```bash
npm run build
npm run preview  # Check site at http://localhost:4173
# Verify: No visual changes, meta tags visible in page source
```

**Expected outcome:**
- SEO score: 91 → 100
- Rich search results (business hours, location, services)
- Professional favicon in browser tabs

---

### Phase 2: Tailwind CSS Build Process (Medium Risk - Implement Second)

**Risk Level:** MEDIUM - Requires build configuration

**Files to modify:**
- `index.html` - Remove CDN Tailwind
- `index.tsx` - Import CSS
- `package.json` - Add dependencies

**Files to create:**
- `tailwind.config.js`
- `postcss.config.js`
- `src/index.css`

**Changes:**

1. **Install dependencies:**
```bash
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
```

2. **Create `tailwind.config.js`** (in project root):
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "brand-gold": "#f4b434",
        "brand-gold-dark": "#b8810d",
        "primary-blue": "#1A73E8",
        "primary-green": "#34A853",
        "primary-yellow": "#f4b434",
        "primary-red": "#EA4335",
        "background-light": "#FFFFFF",
        "background-dark": "#202124",
        "surface-light": "#F8F9FA",
        "surface-dark": "#303134",
        "text-primary-light": "#202124",
        "text-primary-dark": "#E8EAED",
        "text-secondary-light": "#5F6368",
        "text-secondary-dark": "#9AA0A6",
      },
      fontFamily: {
        "display": ["Google Sans", "sans-serif"],
        "body": ["Roboto", "sans-serif"]
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
```

3. **Create `postcss.config.js`** (in project root):
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

4. **Create `src/index.css`** (new file):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Styles */
body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Google Sans', sans-serif;
}
```

5. **Update `index.tsx`** (add import at top):
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './src/index.css';  // ← ADD THIS LINE
import App from './App';

// ... rest of file unchanged
```

6. **Update `index.html`** - Remove these sections:
```html
<!-- REMOVE THIS: -->
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    darkMode: 'class',
    theme: { extend: { ... } }
  }
</script>
<style>
  body { font-family: 'Roboto', sans-serif; }
  h1, h2, h3, h4, h5, h6 { font-family: 'Google Sans', sans-serif; }
</style>
```

**Testing:**
```bash
npm run build  # Should complete without errors
npm run preview  # Site should look IDENTICAL
# Check: All colors, fonts, spacing unchanged
```

**Expected outcome:**
- CSS: 3.4 MB → 7 KB (99.8% reduction)
- FCP improvement: ~700ms
- No render-blocking CDN script

---

### Phase 3: Image Optimization (Medium-High Risk - Implement Third)

**Risk Level:** MEDIUM-HIGH - Path issues can break images

**Files to modify:**
- `components/Hero.tsx`
- `components/Services.tsx`
- `components/Header.tsx`

**Prerequisites:**
1. Verify optimized images exist in `public/assets/optimized/`
2. If not, run: `npm run optimize-images`

**Changes:**

1. **Update `components/Hero.tsx`:**

Find:
```tsx
import heroImage from '/public/assets/Free damage inspections.jpeg';
```

Replace with:
```tsx
// Use string path - Vite serves /public as /
const heroImage = '/assets/optimized/Free damage inspections.webp';
```

2. **Update `components/Services.tsx`:**

Find:
```tsx
import roofingImage from '/public/assets/Residential Roofing.jpeg';
import guttersImage from '/public/assets/Residential Gutters.jpeg';
import solarImage from '/public/assets/Residential Solar.jpeg';
```

Replace with:
```tsx
const roofingImage = '/assets/optimized/Residential Roofing.webp';
const guttersImage = '/assets/optimized/Residential Gutters.webp';
const solarImage = '/assets/optimized/Residential Solar.webp';
```

3. **Update `components/Header.tsx`:**

Find:
```tsx
import logoImage from '/public/assets/Sanchez (2).png';
import instagramIcon from '/public/assets/Sanchez (4).png';
```

Replace with:
```tsx
const logoImage = '/assets/logo.png';
const instagramIcon = '/assets/Sanchez (4).png';
```

**Testing:**
```bash
npm run build
npm run preview
# Check: ALL images load correctly
# Hero image, service cards, logo, Instagram icon
```

**Expected outcome:**
- LCP: 8.4s → 3.2s (62% faster)
- Hero image: 899 KB → 88 KB (90% reduction)
- Service images: Average 85% reduction

---

### Phase 4: Code Splitting & Lazy Loading (Low Risk - Implement Fourth)

**Risk Level:** LOW - Easy to revert

**Files to modify:**
- `App.tsx`

**Changes:**

Replace entire `App.tsx` with:
```tsx
import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

// Lazy load below-the-fold components for better initial load performance
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CallToAction = lazy(() => import('./components/CallToAction'));

// Loading placeholder
const LoadingFallback = () => (
  <div className="h-96 w-full flex items-center justify-center bg-surface-light">
    <div className="animate-pulse text-text-secondary-light">Loading...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden w-full">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />

        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <CallToAction />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
```

**Testing:**
```bash
npm run build
npm run preview
# Check: Components load smoothly, no flash of loading states
```

**Expected outcome:**
- Main bundle: 344 KB → 339 KB
- Separate chunks: Services (2.4 KB), Testimonials (2.8 KB), CallToAction (1.8 KB)
- Faster Time to Interactive

---

### Phase 5: Font Loading Optimization (Low Risk - Implement Fifth)

**Risk Level:** LOW

**Files to modify:**
- `index.html`

**Changes:**

Find the Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

Replace with optimized loading:
```html
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap" as="style">
<link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
```

**Testing:**
```bash
npm run build
npm run preview
# Check: Fonts load, no FOUT (Flash of Unstyled Text)
```

**Expected outcome:**
- FCP improvement: ~100ms
- Non-blocking font loading

---

## Deployment Workflow

### For Each Phase

1. **Make changes** to source files (never dist/)
2. **Test locally:**
   ```bash
   npm ci  # Clean install
   npm run build  # Build successfully
   npm run preview  # Verify at http://localhost:4173
   ```
3. **If tests pass, commit and push:**
   ```bash
   git add <modified-files>
   git commit -m "Phase X: Description"
   git push
   ```
4. **Monitor GitHub Actions:**
   - Go to: https://github.com/MattDreier/sanchez-legacy-roofing-website/actions
   - Wait for workflow to complete (~2 minutes)
5. **Verify live site:**
   - Open: https://www.sanchezlegacyroofing.com
   - Test same items as local preview
6. **If successful, proceed to next phase**
7. **If broken, rollback:**
   ```bash
   git revert HEAD
   git push
   ```

---

## Critical Rules

✅ **DO:**
- Modify source files only (components, configs, HTML)
- Test locally with `npm run build && npm run preview` before every commit
- Deploy one phase at a time
- Monitor GitHub Actions after each push
- Verify live site works before next phase

❌ **DON'T:**
- Commit `dist/` folder (it's in .gitignore for good reason)
- Use `git add -f dist/` (this breaks the workflow)
- Skip local testing
- Deploy multiple phases at once
- Ignore GitHub Actions errors

---

## Expected Final Results

After all 5 phases complete:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Performance Score** | 67 | 89-95 | +32-42% |
| **LCP** | 8.4s | 2.5-3.2s | 62-70% faster |
| **FCP** | 3.4s | 1.2-2.7s | 21-65% faster |
| **SEO Score** | 91 | 100 | +10% |
| **Best Practices** | 96 | 100 | +4% |
| **Page Weight** | 4.0 MB | 550 KB | 86% lighter |
| **CSS Size** | 3.4 MB | 7 KB | 99.8% smaller |

---

## Rollback Procedure

If any phase breaks the site:

```bash
# Option 1: Revert the last commit
git revert HEAD
git push

# Option 2: Reset to specific working commit
git log --oneline -5  # Find the working commit hash
git reset --hard <commit-hash>
git push --force
```

---

## Why This Will Work

1. **Incremental approach** - Each phase tested independently
2. **Proven optimizations** - Same changes achieved 89/100 before
3. **Proper deployment** - Let GitHub Actions build dist/
4. **Local testing** - Catch issues before they reach production
5. **Easy rollback** - Any phase can be reverted quickly

The performance optimizations are sound. The deployment workflow is sound. The previous failure was due to bypassing the workflow by committing dist/. This plan avoids that mistake entirely.

---

## Additional Notes

### Files That Should Exist

After running image optimization script previously, these should exist:
- `public/assets/optimized/*.webp` - Optimized images
- `public/favicon.ico`, `public/favicon-16x16.png`, etc. - Icon files
- `public/site.webmanifest` - PWA manifest
- `scripts/optimize-images.js` - Image optimization script
- `scripts/generate-icons.js` - Icon generation script

If these don't exist, they can be regenerated with:
```bash
npm run optimize-images
npm run generate-icons
```

### Performance Audit Reports

Saved in `performance-audits/`:
- `2025-12-16-baseline-audit.md` - Initial audit (67/100)
- `2025-12-17-post-optimization-audit.md` - Successful optimization (89/100)

These document the improvements and serve as reference for future work.

---

**Last Updated:** December 17, 2025
**Status:** Ready for implementation
**Estimated Time:** 2-3 hours total (30-45 minutes per phase)