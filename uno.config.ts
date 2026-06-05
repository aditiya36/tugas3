// konfigurasi UnoCSS buat project crypto
import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400;500;600;700',
        mono: 'JetBrains Mono:400',
      },
    }),
  ],
  // custom shortcut biar gampang dipake
  shortcuts: {
    'btn-refresh': 'px-6 py-3 rounded-lg font-600 text-sm cursor-pointer border-none transition-all duration-200',
  },
  theme: {
    colors: {
      // warna khas binance
      accent: '#FCD535',
      accentHover: '#E5C130',
      dark: {
        bg: '#0B0E11',
        card: '#1E2329',
        cardHover: '#2B3139',
        border: '#2B3139',
        text: '#EAECEF',
        textSec: '#848E9C',
      },
    },
  },
})
