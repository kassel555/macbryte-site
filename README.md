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

## Deploy (Netlify)
Connect this repo in Netlify: build command `npm run build`, publish directory `dist`.
Callback requests appear under Netlify → Forms → "callback" (turn on email notifications there).
