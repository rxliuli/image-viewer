import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { cssdts } from '@liuli-util/vite-plugin-css-dts'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    preact(),
    cssdts(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        icons: [
          {
            src: '/icons/logo512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        file_handlers: [
          {
            action: './',
            accept: {
              'image/*': ['.jpg', '.jpeg', '.png', '.webp', '.svg'],
            },
          },
        ],
      },
    }),
  ],
})
