// 'off' or 0 - turn the rule off
// 'warn' or 1 - turn the rule on as a warning (does not affect exit code)
// 'error' or 2 - turn the rule on as an error (exit code will be 1)


module.exports = {
  extends: [
    './base/rules/best-practices',
    './base/rules/errors',
    './base/rules/es6',
    './base/rules/imports',
    './base/rules/node',
    './base/rules/strict',
    './base/rules/style',
    './base/rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    commonjs: true,
    'shared-node-browser': true,
    serviceworker: true,
    node: true,
    worker: true
  },
  globals: {
    __dirname: 'readonly',
    console: 'readonly',
    module: 'readonly',
    Promise: 'readonly',
    require: 'readonly',
    Symbol: 'readonly',
    _require: 'writable',
    logger: 'writable',
    Logger: 'writable'
  },
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true
    },
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  rules: {
    strict: [2, 'safe']
  }
};
