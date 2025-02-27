import presetRemToPx from '@unocss/preset-rem-to-px'
import { defineConfig, presetAttributify, presetIcons, presetMini } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetMini(),
    presetRemToPx({ baseFontSize: 4 }),
    presetIcons()
  ]
})
