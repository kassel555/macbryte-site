import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://macbryte.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/draft'),
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});