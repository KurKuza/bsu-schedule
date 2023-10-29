module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // '@feature-sliced',
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['prettier', '@typescript-eslint', 'import'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': 'error',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'name',
          'directives',
          'components',
          'mixins',
          ['provide', 'inject'],
          'model',
          'props',
          'filters',
          'data',
          'computed',
          'watch',
          'methods',
          'LIFECYCLE_HOOKS',
          'ROUTER_GUARDS',
        ],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: [
              '@/shared/*/*/**',
              '@/entities/*/*/**',
              '@/features/*/**',
              '@/widgets/*/**',
              '@/pages/*/**',
              '@/app/**',
            ],
            message: 'Direct access to the internal parts of the module is prohibited',
          },
          {
            group: [
              '../**/shared',
              '../**/entities',
              '../**/features',
              '../**/widgets',
              '../**/pages',
              '../**/app',
            ],
            message: 'Prefer absolute imports instead of relatives',
          },
        ],
      },
    ],
    'vue/v-for-delimiter-style': ['error', 'of'],
    'vue/next-tick-style': ['error', 'promise'],
    'vue/require-prop-types': 'error',
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/this-in-template': ['error', 'never'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/no-multi-spaces': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/v-on-event-hyphenation': ['error', 'never'],
  },
};
