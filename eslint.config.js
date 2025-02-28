import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

const oldEslintrcLikeConfig = {
  ignorePatterns: [
    '*.min.{js,jsx,ts,tsx}',
    '.*cache/',
    '.github/',
    '.next/',
    '.vercel/',
    '.vscode/',
    'build/',
    'dist/',
    'node_modules/',
    'public/',
    'package-lock.json',
    'pnpm-lock.yaml',
  ],
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
      extends: ['plugin:jsonc/recommended-with-jsonc'],
    },
    {
      files: ['**/*.md'],
      plugins: ['markdown'],
      processor: 'markdown/markdown',
    },
  ],
  rules: {
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
  },
};

export default [...compat.config(oldEslintrcLikeConfig)];
