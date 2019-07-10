// 'off' or 0 - turn the rule off
// 'warn' or 1 - turn the rule on as a warning (does not affect exit code)
// 'error' or 2 - turn the rule on as an error (exit code will be 1)


module.exports = {
  env: {
    node: true
  },

  rules: {
    // enforce return after a callback
    'callback-return': 0,

    // require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    'global-require': 2,

    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 1,

    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 2,

    // disallow mixing regular variable and require declarations
    'no-mixed-requires': [1, { grouping: true, allowCall: false }],

    // disallow use of new operator with the require function
    'no-new-require': 2,

    // disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 2,

    // disallow use of process.env
    'no-process-env': 2,

    // disallow process.exit()
    'no-process-exit': 1,

    // restrict usage of specified node modules
    'no-restricted-modules': 0,

    // disallow use of synchronous methods (off by default)
    'no-sync': 2
  }
};
