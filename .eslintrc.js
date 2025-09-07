module.exports = {
  // Project root ESLint configuration
  root: true,

  // Extend React Native default ESLint config
  extends: '@react-native',

  // Custom rules
  rules: {
    // Disallow any console statements (console.log, console.warn, console.error, etc.)
    'no-console': 'error',

    // Do not allow explicit 'any' type in TypeScript
    '@typescript-eslint/no-explicit-any': 'error',

    // Maximum 10 parameters per function
    'max-params': ['error', 10],

    // Maximum 50 lines per function, ignore comments
    'max-lines-per-function': ['error', { max: 50, skipComments: true }],

    // Maximum nesting depth in a function (if/for/while)
    'max-depth': ['error', 3],

    // Cyclomatic complexity of functions must not exceed 10
    complexity: ['error', { max: 10 }],

    // Require explicit return type on functions
    '@typescript-eslint/explicit-function-return-type': 'error',

    // Require type definitions for exported functions
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // Disallow unused variables
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],

    // Require named functions instead of anonymous functions
    'func-names': ['error', 'always'],
  },
};
