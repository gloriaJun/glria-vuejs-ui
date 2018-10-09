module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    '@vue/airbnb',
    'plugin:vue/recommended',
  ],
  rules: {
    "vue/require-default-prop": 'off',
    "indent": ["error", 2, {
      "SwitchCase": 1,
    }],
    "no-param-reassign": [2, { "props": false }],
    "no-underscore-dangle": 0,
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
