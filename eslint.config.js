// Import the necessary modules
import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
    },
    env: {
      node: true,
    },
  },
  // Prettier's configuration to disable conflicting ESLint rules
  prettierConfig,
  {
    // Note: there should be no other properties in this object
    ignores: ['node_modules/', 'dist/', 'public/', 'static/'],
  },
];
