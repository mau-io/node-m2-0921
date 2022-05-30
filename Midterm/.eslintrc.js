module.exports = {
  env: {
    node: true,
    es2020: true,
    mocha: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: ['error', 2],
    'quote-props': ['error', 'as-needed'],
    'semi-spacing': ['error', { before: false, after: false }],
    'semi-style': ['error', 'last'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-var': 'error',
    'prefer-destructuring': ['error', {object: true, array: true}],
    'prefer-spread': 'error',
    'no-whitespace-before-property': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  }
};