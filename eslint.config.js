import antfu from '@antfu/eslint-config'
// import unocss from '@unocss/eslint-config/flat'

export default antfu(
  {

    typescript: true,
    vue: true,
    unocss: true,

    // 使用外部格式化程序格式化 css、html、markdown 等文件
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: true,
      /**
       * Format HTML files
       * By default uses Prettier
       */
      html: true,
      /**
       * Format Markdown files
       * Supports Prettier and dprint
       * By default uses Prettier
       */
      markdown: 'prettier'
    },
    // 启用样式规则
    stylistic: {
      // 缩进级别
      indent: 2,
      // 引号风格 'single' | 'double'
      quotes: 'single',
      // 是否启用分号
      semi: false
    },
    // 忽略文件
    ignores: [
      '*.sh',
      'node_modules',
      '*.md',
      '*.woff',
      '*.ttf',
      '.idea',
      '/public',
      '/docs',
      '.husky',
      '.local',
      '/bin',
      'Dockerfile'
    ]
  },
  {
    // 对所有文件都生效的规则
    rules: {
      // vue
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      'vue/attributes-order': 'off',
      // ts
      'ts/no-use-before-define': 'off',
      // node
      'node/prefer-global/process': 'off',
      // style
      'style/comma-dangle': ['error', 'never'],
      'style/brace-style': ['error', '1tbs'],
      // regexp
      'regexp/no-unused-capturing-group': 'off',
      // other
      'no-console': 'off',
      'no-debugger': 'off',
      'symbol-description': 'off',
      'antfu/if-newline': 'off'
    }
  }
)
