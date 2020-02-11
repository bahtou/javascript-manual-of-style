// 'off' or 0 - turn the rule off
// 'warn' or 1 - turn the rule on as a warning (does not affect exit code)
// 'error' or 2 - turn the rule on as an error (exit code will be 1)


module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/strict',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  env: {
    node: true,
    amd: true
  },
  globals: {
    __dirname: 'readonly',
    console: 'readonly',
    module: 'readonly',
    Promise: 'readonly',
    require: 'readonly',
    Symbol: 'readonly',
    window: 'readonly',
    document: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true
    }
  },
  parser: 'esprima',
  rules: {}
};
