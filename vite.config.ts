import path, { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import UnpluginSvgComponent from 'unplugin-svg-component/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnpluginSvgComponent({
      iconDir: [resolve(__dirname, 'src/assets/svgs')],
      preserveColor: resolve(__dirname, 'src/assets/svgs/preserve-color'),
      dts: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
