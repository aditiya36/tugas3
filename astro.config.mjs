// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

// konfigurasi astro + unocss + capacitor
export default defineConfig({
  // output static agar bisa di-wrap oleh Capacitor
  output: 'static',

  // server config untuk testing dari device
  server: {
    host: true,
  },

  integrations: [
    UnoCSS({
      injectReset: true, // reset css bawaan browser
    }),
  ],
});
