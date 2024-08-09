import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      // 'no-unused-vars': ['warn'],
      'prefer-const': ['error'],
    },
  },
  {
    ignores: ['node_modules', 'dist', 'env.d.ts, eslint.config.js'],
  },
];
