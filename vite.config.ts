import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import prerender from 'vite-plugin-prerender';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
        manifest: {
          name: 'Agro Arkafla',
          short_name: 'Arkafla',
          description: 'Excelência no Agronegócio - Fazenda Fundamento',
          theme_color: '#2e7d32',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      }),
      prerender({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/', 
          '/quem-somos', 
          '/atividades', 
          '/logistica', 
          '/galeria', 
          '/contato',
          '/localidade/castro',
          '/localidade/carambei',
          '/localidade/ponta-grossa',
          '/localidade/pirai-do-sul',
          '/localidade/tibagi',
          '/localidade/telemaco-borba',
          '/localidade/jaguariaiva',
          '/localidade/senges',
          '/localidade/curitiba',
          '/localidade/campo-largo',
          '/localidade/palmeira',
          '/localidade/irati',
          '/localidade/prudentopolis',
          '/localidade/arapoti'
        ],
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
