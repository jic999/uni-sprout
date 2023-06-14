import { defineConfig, presetIcons } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

export default defineConfig({
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
  },
  rules: [
    [
      /^ellipsis-(\d+)$/,
      ([, n]) => ({
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'display': ' -webkit-box',
        '-webkit-line-clamp': `${n}`,
        '-webkit-box-orient': 'vertical',
      }),
    ],
  ],
  presets: [
    presetWeapp(),
    presetIcons(),
  ],
  transformers: [
    transformerAttributify(),
    transformerClass(),
  ],
})
