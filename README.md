# macbryte.com

Static site for Macbryte — one-on-one computer lessons for seniors (Mac or PC) in Ottawa.
Built with Astro + Tailwind. No framework JavaScript is shipped; pages are plain HTML.

## Run it
    npm install
    npm run dev      # http://localhost:4321
    npm run build    # output in dist/

## Where things live
- `src/data/site.ts` — phone, email, student/hour figures, coach name/photo, services, testimonials. Change facts here.
- `src/pages/index.astro` — homepage. `contact.astro` — callback form (Netlify Forms).
- `src/html/*.html` — copy for every other page (services, areas, courses, blog, etc.). Edit the HTML directly.
- `src/data/pages.json` — title, description and structured data for those pages.
- `public/_redirects` — old URLs (e.g. /computer-training) → current pages.

## Deploy (Netlify) — automatic
Source of truth: **macbryte/macbryte-website-42789, branch `senior-site`**.
Netlify project `frolicking-cat-2ffb08` builds every push to `senior-site` (`npm run build` → `dist`) and publishes macbryte.com.
Do NOT merge into `main` of that repo — `main` holds the old web-design version of the site.
Callback requests appear under Netlify → Forms → "callback" and are emailed to support@macbryte.com and rahul@macbryte.com.

## Adding a blog post
1. Write the body as HTML in `src/posts/<slug>.html`.
2. Add an entry to `src/data/posts.json` (title, seoTitle ≤ 65 chars, description 70–160 chars, category, quickAnswer, faqs, sources).
3. Push to `senior-site`. The post, blog index, sitemap and /llms.txt update automatically.
