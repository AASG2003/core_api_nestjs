// eslint.config.js
pluginTs = require('@typescript-eslint/eslint-plugin');
parserTs = require('@typescript-eslint/parser');
prettierPlugin = require('eslint-plugin-prettier');
module.exports = [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs,
      prettier: prettierPlugin,
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': 'error',
    },
    ignores: ['eslint.config.js'],
  },
];
