module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'plugin',
          'custom-variant',
          'theme',
        ],
      },
    ],
    'custom-property-pattern': null,
  },
  ignoreFiles: [
    '**/*.{js,jsx,ts,tsx}',
    '**/*.min.css',
    '.*cache/',
    '.github/',
    '.next/',
    '.vercel/',
    '.vscode/',
    'build/',
    'dist/',
    'node_modules/',
    'public/',
  ],
};
