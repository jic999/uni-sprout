// eslint.config.js
const antfu = require('@antfu/eslint-config').default
const unocss = require('@unocss/eslint-plugin')

module.exports = antfu(
  {},
  unocss.configs.flat,
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/use-v-on-exact': 'off',
      'node/prefer-global/process': 'off',
      'prefer-promise-reject-errors': 'off',
      'no-undef': 'off',
    },
  },
)
