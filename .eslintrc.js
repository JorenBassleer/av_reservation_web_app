module.exports = {
  root: true,
  env: {
    browser: true,
  },
  settings: {
  },
  parser: 'vue-eslint-parser',
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'linebreak-style': 'off',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'array-bracket-newline': ['error', { multiline: true }],
  },
};
