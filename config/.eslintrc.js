const settings = require('./webpack/settings');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['typescript-eslint', 'react'],
  env: {
    browser: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/react'
  ],
  parserOptions: {
    project: settings.paths.tsconfig,
    tsconfigRootDir: __dirname,
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {},
  settings: {
    react: {
      version: 'detect'
    }
  }
};
