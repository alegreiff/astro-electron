// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  srcDir: './src/astro-ui',
  outDir: './dist-astro',
  publicDir: './src/public',

  server: {
    port: 4321,
    
  },

  integrations: [tailwind()]
});