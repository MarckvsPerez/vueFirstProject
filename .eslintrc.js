module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'plugin:vue/vue3-strongly-recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': '2023',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'linebreak-style': 'off',
  },
};
