/**
 * This config will:
 * - Run Biome on JS/TS/JSON files (lint + format).
 * - Run Stylelint on CSS files.
 */
const config = {
  // JS/TS/JSON - Biome handles both linting and formatting
  '**/*.{js,jsx,ts,tsx,json}': ['biome check --write'],
  // CSS - Stylelint only (Biome doesn't support Tailwind v4's @theme)
  '**/*.css': ['stylelint --fix'],
};

export default config;
