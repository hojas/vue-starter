import path from 'node:path'
import mdx from '@mdx-js/rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    mdx({
      jsxImportSource: 'vue',
    }),
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
