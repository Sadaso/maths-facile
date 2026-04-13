import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [react(), sitemap()],
  output: 'static',
  site: 'https://maths-facile.com',
  build: {
    format: 'directory',
  },
});
