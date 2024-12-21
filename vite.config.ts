import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  build: {
    target: 'es2015',
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  optimizeDeps: {
    include: ['@ionic/core', '@ionic/core/loader']
  },
  resolve: {
    alias: {
      '@ionic/core': '@ionic/core/dist/esm'
    }
  }
});