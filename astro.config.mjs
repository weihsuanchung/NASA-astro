import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://weihsuanchung.github.io',
  base: '/NASA-astro/', 
  integrations: [tailwind()],
});
