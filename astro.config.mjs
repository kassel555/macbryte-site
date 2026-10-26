import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://macbryte.com',
  trailingSlash: 'never',
  build: { format: 'file' }, // /pricing -> pricing.html, no trailing-slash redirects
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({ filter: (page) => !/\/(thanks|404)$/.test(page) }),
  ],
});
