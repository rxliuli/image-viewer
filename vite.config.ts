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
        id: 'rxliuli.image-viewer',
        short_name: '图片查看器',
        name: '图片查看器',
        icons: [
          {
            src: '/icons/logo512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/logo.svg',
            sizes: 'any',
            type: 'image/svg',
          },
        ],
        file_handlers: [
          {
            action: './',
            accept: {
              // ref: https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types
              'image/*': [
                '.apng',
                '.avif',
                '.bmp',
                '.gif',
                '.ico',
                '.cur',
                '.jpg',
                '.jpeg',
                '.jfif',
                '.pjpeg',
                '.pjp',
                '.png',
                '.svg',
                '.tif',
                '.tiff',
                '.webp',
              ],
            },
          },
        ],
      },
    }),
  ],
})
