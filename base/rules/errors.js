// 'off' or 0 - turn the rule off
// 'warn' or 1 - turn the rule on as a warning (does not affect exit code)
// 'error' or 2 - turn the rule on as an error (exit code will be 1)


module.exports = {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 2,

    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': [2, {
      allowImplicit: false
    }],

    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 2,

    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 2,

    // Disallow comparisons to negative zero
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 2,

    // disallow assignment in conditional expressions
    'no-cond-assign': [0, 'always'],

    // disallow use of console
    'no-console': [1, {
      allow: ['warn', 'error']
    }],

    // disallow use of constant expressions in conditions
    'no-constant-condition': 1,

    // disallow control characters in regular expressions
    'no-control-regex': 2,

    // disallow use of debugger
    'no-debugger': 2,

    // disallow duplicate arguments in functions
    'no-dupe-args': 2,

    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 2,

    // disallow a duplicate case label.
    'no-duplicate-case': 2,

    // disallow empty statements
    'no-empty': 2,

    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 2,

    // disallow assigning to the exception in a catch block
    'no-ex-assign': 2,

    // disallow double-negation boolean casts in a boolean context
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 2,

    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': [2, 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: true,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false
    }],

    // disallow unnecessary semicolons
    'no-extra-semi': 2,

    // disallow overwriting functions written as function declarations
    'no-func-assign': 2,

    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 2,

    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 2,

    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 2,

    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 2,

    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 2,

    // disallow use of Object.prototypes builtins directly
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 2,

    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 2,

    // disallow sparse arrays
    'no-sparse-arrays': 2,

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 2,

    // Avoid code that looks like two expressions but is actually one
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 2,

    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 2,

    // disallow return/throw/break/continue inside finally blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 2,

    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 2,

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 2,

    // disallow comparisons with the value NaN
    'use-isnan': 2,

    // ensure JSDoc comments are valid
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // ensure that the results of typeof are compared against a valid string
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': [2, {
      requireStringLiterals: true
    }]
  }
};