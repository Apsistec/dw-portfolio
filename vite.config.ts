// vite.config.ts
import { defineConfig } from "vite";
import { mergeConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  build: {
    target: "es2020", // Browser compatibility target
    outDir: "www", // Output directory
    assetsDir: "assets", // Static assets directory
    sourcemap: true, // Generate source maps
    minify: "esbuild", // Minification strategy ('esbuild' | false | 'terser')
    cssCodeSplit: true, // Split CSS into chunks
    rollupOptions: {
      // Advanced output configuration
      output: {
        manualChunks: {
          // Separate Ionic components for better caching
          ionic: ["@ionic/angular"],
          // Core Angular packages
          angular: ["@angular/core", "@angular/common", "@angular/router"],
          // Third party packages
          vendor: ["rxjs"],
        },
      },
    },
  },
  // Optimization Options
  optimizeDeps: {
    include: ["@ionic/core", "@ionic/angular", "ionicons"], // Dependencies to pre-bundle
    exclude: [
      "@ionic/core",
      "ion-app_8",
      "ion-tab_2",
      "ion-tab-bar_2",
      "ion-button_2",
      "ion-item_8",
      "ion-toggle",
      "ion-col_3",
      "ion-card_5",
      "ion-text",
      "ion-fab_3",
      "ion-img",
      "ion-chip",
      "ion-toast",
      "@ionic/core/loader",
      "ionicons",
      "@ionic/angular",
      "@ionic/angular/css/core.css",
      "@ionic/angular/css/normalize.css",
      "@ionic/angular/css/structure.css",
      "@ionic/angular/css/typography.css",
      "@ionic/angular/css/display.css",
      "@ionic/angular/css/padding.css",
      "@ionic/angular/css/float-elements.css",
      "@ionic/angular/css/text-alignment.css",
      "@ionic/angular/css/text-transformation.css",
      "@ionic/angular/css/flex-utils.css",
    ], // Dependencies to avoid pre-bundling
    esbuildOptions: {
      // ESBuild specific options
      target: "es2015",
    },
  },

  // Plugin Options
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Portfolio of Douglas White ",
        short_name: "Portfolio of D. White",
        theme_color: "#00435e",
        icons: [
          
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],

  // Resolve Options
  resolve: {
    alias: {
      "@": "/src",
      "@app": "/src/app",
      "@env": "/src/environments",
      "@public": "/public",
      "@theme": "/src/theme",
    },
  },
});
