import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://enova.pages.dev',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
