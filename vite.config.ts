import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  
  plugins: [
    react(),
    tsconfigPaths(),
    VitePluginHtmlEnv({
      compiler: true,
    }),VitePWA({
      registerType: 'autoUpdate',
      devOptions:{enabled: true, type: 'module'}, // vite dev 로 돌려도 PWA 까지 볼 수 있게끔 주는 옵션
      includeAssets: [
      '/icon/launchericon-48-48.png',
      '/icon/launchericon-96-96.png',
      '/icon/launchericon-192-192.png',
      '/icon/launchericon-512-512.png',
      ], 
      manifest: {
          name: 'sportify',
          short_name: 'sportify',
          start_url: "/",
          background_color: "#000000",
          display: "fullscreen",
          theme_color: '#0096C7',
          icons:[
            {
              src:  '/icon/launchericon-48-48.png',
              sizes: '48x48',
              type: 'image/png',
              purpose: "any maskable"
            },
            {
              src:  '/icon/launchericon-96-96.png',
              sizes: '96x96',
              type: 'image/png',
              purpose: "any maskable"
            },
            {
              src:  '/icon/180.png',
              sizes: '180x180',
              type: 'image/png',
              purpose: "any maskable"
            },
            {
              src:  '/icon/launchericon-192-192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: "any maskable"
            },
            {
              src:  '/icon/launchericon-512-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: "any maskable"
            },
          ]
        }
      })
  ],
});
