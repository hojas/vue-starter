import path from 'node:path'
import mdx from '@mdx-js/rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
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
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@composables': path.resolve(__dirname, 'src/composables'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@router': path.resolve(__dirname, 'src/router'),
        '@assets': path.resolve(__dirname, 'src/assets'),
      },
    },
    server: {
      port: parseInt(env.VITE_PORT || '3000'),
      open: true,
      host: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
      minify: mode === 'production',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router', 'pinia'],
          },
        },
      },
      assetsDir: 'assets',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000,
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia'],
      exclude: [],
    },
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
  }
})
