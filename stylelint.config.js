module.exports = {
  // Use recommended configs from stylelint, standard CSS, and Tailwind.
  // Prettier config last so it can override conflicting rules.
  extends: [
    'stylelint-config-standard',
    'stylelint-config-tailwindcss',
    'stylelint-config-prettier',
  ],

  rules: {
    // override/add stylelint rules here.
  },

  ignoreFiles: [
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
