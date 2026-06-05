import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tugas3.cryptotracker',
  appName: 'Crypto Tracker',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
