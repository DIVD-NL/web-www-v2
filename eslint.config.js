import eslint from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
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
  },
  prettierConfig,
  {
    ignores: ['node_modules/', 'dist/', 'public/', 'static/'],
  },
);
