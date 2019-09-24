// 'off' or 0 - turn the rule off
// 'warn' or 1 - turn the rule on as a warning (does not affect exit code)
// 'error' or 2 - turn the rule on as an error (exit code will be 1)


module.exports = {
  env: {
    node: true
  },

  rules: {
    // enforce return after a callback
    'callback-return': 'off',

    // require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 'warn',

    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['warn', { grouping: true, allowCall: false }],

    // disallow use of new operator with the require function
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // disallow use of process.env
    'no-process-env': 'error',

    // disallow process.exit()
    'no-process-exit': 'warn',

    // restrict usage of specified node modules
    'no-restricted-modules': 'off',

    // disallow use of synchronous methods (off by default)
    'no-sync': 2
  }
};
