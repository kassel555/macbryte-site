# MacBryte — Astro Website

A fast, accessible, SEO-optimized website for MacBryte: personalized technology coaching for seniors in Ottawa.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
macbryte-site/
├── public/                    # Static assets (copied to dist/)
│   ├── images/               # Your photos, hero images, screenshots
│   ├── videos/               # MP4 files (or use YouTube embeds)
│   ├── robots.txt            # Crawl rules
│   ├── site.webmanifest      # PWA manifest
│   └── favicon.svg           # SVG logo
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Schema.astro      # JSON-LD structured data injection
│   │   ├── Header.astro      # Navigation + mobile menu
│   │   ├── Footer.astro      # Footer with links + contact
│   │   ├── CTA.astro         # Call-to-action buttons
│   │   └── Breadcrumb.astro  # Breadcrumb navigation + schema
│   ├── content/              # Content collections (type-safe markdown)
│   │   ├── config.ts         # Collection schemas (Zod)
│   │   ├── services/         # 5 service pages
│   │   └── guides/           # 7 guide pages
│   ├── data/
│   │   └── business.json     # Single source of truth (NAP, hours, services, FAQs)
│   ├── layouts/              # Page layouts
│   │   ├── Base.astro        # Main layout with <head>, meta, fonts
│   │   ├── Service.astro     # Service page layout
│   │   └── Guide.astro       # Guide/blog page layout
│   └── pages/                # File-based routing
│       ├── index.astro       # Homepage
│       ├── about.astro       # About page
│       ├── contact.astro     # Contact/booking form
│       ├── services/         # Service pages (5)
│       └── guides/           # Guide pages (7)
├── astro.config.mjs          # Astro config + integrations
├── package.json
├── tsconfig.json
├── netlify.toml              # Netlify deployment config
└── netlify.toml              # Netlify deployment config
```

## 🎯 Key Features

| Feature | Implementation |
|---------|----------------|
| **Content Collections** | Type-safe markdown with Zod schemas |
| **Single Source of Truth** | `business.json` for NAP, services, FAQs, reviews |
| **Schema.org JSON-LD** | LocalBusiness, Service, Person, HowTo, FAQPage, VideoObject, BreadcrumbList, WebSite |
| **Content-Driven Pages** | Service & Guide layouts auto-inject correct schema |
| **Sitemap + RSS** | Auto-generated via `astro-sitemap` + `@astrojs/rss` |
| **PWA Ready** | Web manifest, icons, offline-capable |
| **Accessibility** | Semantic HTML, ARIA labels, skip links, focus styles |
| **Performance** | Inlined critical CSS, font preloading, image optimization |
| **Deployment** | Netlify-ready with headers, redirects, caching |

## 📝 Adding Content

### Add a New Service
1. Create `src/content/services/new-service.md` with frontmatter:
```markdown
---
id: 'new-service'
title: 'New Service Name'
description: 'Short description for SEO'
icon: '🎯'
price: 60
priceCurrency: 'CAD'
unitText: 'hour'
modules: ['Module 1', 'Module 2', 'Module 3']
faqs:
  - question: 'Common question?'
    answer: 'Helpful answer.'
heroImage: '/images/services/new-service-hero.jpg'
heroImageAlt: 'Description for accessibility'
testimonials:
  - name: 'Jane'
    location: 'Ottawa'
    quote: 'Great service!'
---
## What You'll Learn
Content here...
```
2. Add to `src/pages/services/new-service.astro`:
```astro
import Service from '../../layouts/Service.astro';
import { getEntry } from 'astro:content';

const entry = await getEntry('service', 'new-service');
<Service entry={entry} />
```
3. Add link in `services/index.astro` and Footer.astro

### Add a New Guide
1. Create `src/content/guides/new-guide.md` with frontmatter
2. Create `src/pages/guides/new-guide.astro` using Guide layout
3. Add to Guides hub and relatedGuides in other guides

## 🖼️ Required Assets

Place in `public/images/`:

| Asset | Specs | Used In |
|-------|-------|---------|
| `logo.svg` | 32×32, viewBox 0 0 32 32 | Header, Footer, Schema |
| `favicon.svg` | 32×32 | Browser tab |
| `favicon-32.png` | 32×32 | Legacy browsers |
| `favicon-192.png` | 192×192 | PWA, Android |
| `apple-touch-icon.png` | 180×180 | iOS homescreen |
| `og-default.jpg` | 1200×630 | Default Open Graph |
| `og-service.jpg` | 1200×630 | Service pages OG |
| `og-guide.jpg` | 1200×630 | Guide pages OG |
| `rahul-headshot.jpg` | 400×400 | About page, Person schema |
| `services/*.jpg` | 1200×800 | Service cards, hero |
| `guides/*-hero.jpg` | 1200×630 | Guide hero, VideoObject |
| `guides/*-step*.jpg` | 800×600 | HowTo step images |
| `icons/icon-*.png` | 72–512px | PWA manifest |

## 🚀 Deploy to Netlify

1. Push to GitHub
2. Connect repo at [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables if needed
6. Deploy!

Custom domain: Add in Netlify → Domain settings → Add custom domain

## 🔧 Customization

### Colors (in `Base.astro` critical CSS)
```css
:root {
  --color-primary: #1e40af;      /* Main brand blue */
  --color-primary-dark: #1e3a8a; /* Hover states */
  --color-primary-light: #eff6ff;/* Backgrounds */
}
```

### Fonts (in `Base.astro`)
Currently: Inter via Google Fonts. Change `<link rel="preload">` and `<link rel="stylesheet">` URLs.

### Business Info
Edit `src/data/business.json` — all NAP, hours, services, FAQs, reviews, founder info in one place.

## 📊 SEO Checklist (Pre-Launch)

- [ ] All schema validates in [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] All images have descriptive alt text
- [ ] All pages have unique title + meta description
- [ ] Open Graph / Twitter cards render correctly
- [ ] Core Web Vitals pass (PageSpeed Insights)
- [ ] Mobile usability passes
- [ ] GBP claimed + linked from site
- [ ] Search Console verified + sitemap submitted

## 📄 License

MIT — Feel free to use for your own projects.

---

**Built with** [Astro](https://astro.build) • **Deployed on** [Netlify](https://netlify.com) • **Content in** Markdown/MDX