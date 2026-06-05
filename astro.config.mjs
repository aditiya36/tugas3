// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

export default defineConfig({
  output: 'static',
  server: {
    host: true,
  },

  integrations: [
    UnoCSS({
      injectReset: true, // reset css bawaan browser
    }),
  ],
});
