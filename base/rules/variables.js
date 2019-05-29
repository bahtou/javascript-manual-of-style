// 0 or 0 - turn the rule off
// 'warn' or 1 - turn the rule on as a warning (does not affect exit code)
// 2 or 2 - turn the rule on as an error (exit code will be 1)

const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    'init-declarations': 1,

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 1,

    // disallow deletion of variables
    'no-delete-var': 2,

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 2,

    // disallow specific globals
    'no-restricted-globals': [2, 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 2,

    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 2,

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 2,

    // disallow use of undefined when initializing variables
    'no-undef-init': 2,

    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 2,

    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true
    }],

    // disallow use of variables before they are defined
    'no-use-before-define': [2, {
      functions: true,
      classes: true,
      variables: true
    }],
  }
};
