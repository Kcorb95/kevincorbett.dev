/**
 * This config will:
 * - Run ESLint + Prettier on JS/TS files.
 * - Run Stylelint + Prettier on CSS files.
 * - Run Prettier on JSON and Markdown files.
 *
 * ESLint / Stylelint will handle their own ignore rules,
 * and Prettier will skip files in .prettierignore.
 */
const config = {
  // JS/TS
  '**/*.{js,jsx,ts,tsx}': ['eslint --cache --fix', 'prettier --write'],
  // CSS
  '**/*.css': ['stylelint --fix', 'prettier --write'],
  // JSON & Markdown
  '**/*.{json,jsonc,json5,md}': ['prettier --write'],
};

export default config;
