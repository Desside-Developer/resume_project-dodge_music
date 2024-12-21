// By Desside-Developer </Config>
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',        // Path to the TypeScript configuration file
    tsconfigRootDir: __dirname,      // Directory for resolving `tsconfig.json`
    sourceType: 'module',            // Specifies that the source type is a module
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],   // Using TypeScript ESLint plugin and Prettier plugin
  extends: [
    'plugin:@typescript-eslint/recommended',  // Recommended rules for TypeScript
    'plugin:prettier/recommended',            // Includes Prettier configuration
  ],
  root: true,                               // Defines this as the root configuration file
  env: {
    node: true,                             // Node.js environment
    jest: true,                             // Jest environment (for testing)
  },
  ignorePatterns: ['.eslintrc.js'],          // Ignores this file for linting
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',             // Disables the rule for interface name prefixes
    '@typescript-eslint/explicit-function-return-type': 'off',     // Disables the requirement for return types in functions
    '@typescript-eslint/explicit-module-boundary-types': 'off',   // Disables the requirement for boundary types in modules
    '@typescript-eslint/no-explicit-any': 'off',                   // Disables warnings about using `any` type
    'prettier/prettier': ['error', {                                  // Adds Prettier rule
      singleQuote: true,            // Uses single quotes for strings
      trailingComma: 'es5',         // Adds trailing commas in objects/arrays (including for ES5)
      arrowParens: 'always',        // Always include parentheses in arrow functions
      endOfLine: 'auto',            // Handles line endings automatically, no errors for mixed types
    }],
  },
};
