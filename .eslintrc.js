module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    // '@vue/airbnb',
    "@vue/prettier"
  ],
  rules: {
    "vue/require-default-prop": 'off',
    // "no-param-reassign": [2, { "props": false }],
    // "no-underscore-dangle": 0,
    // "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
