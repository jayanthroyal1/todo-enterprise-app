import js from '@eslint/js';
import globals from 'globals';
import security from 'eslint-plugin-security';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['node_modules', 'dist', 'build', 'coverage'],
  },

  js.configs.recommended,

  {
    files: ['**/*.js'],
    plugins: {
      security,
      prettier: prettierPlugin,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'prettier/prettier': 'error',

      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',

      // Security rules
      'security/detect-object-injection': 'warn',
    },
  },

  prettierConfig,
]);
