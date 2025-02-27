import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import UnpluginSvgComponent from 'unplugin-svg-component/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// import Inspect from 'vite-plugin-inspect'

const pathSrc = resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  plugins: [
    Vue(),
    UnoCSS(),
    UnpluginSvgComponent({
      iconDir: [resolve(__dirname, 'src/assets/svgs')],
      preserveColor: resolve(__dirname, 'src/assets/svgs/preserve-color'),
      dts: true
    }),
    AutoImport({

      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),

        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ],

      dts: resolve(pathSrc, 'auto-imports.d.ts')
    }),

    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],
      dts: 'components.d.ts'
    }),

    Icons({
      autoInstall: true
    })

    // Inspect()
  ]
})
