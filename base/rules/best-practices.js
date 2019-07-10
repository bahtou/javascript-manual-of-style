// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (does not affect exit code)
// "error" or 2 - turn the rule on as an error (exit code will be 1)


module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    'accessor-pairs': [1, {
      setWithoutGet: true,
      getWithoutSet: true
    }],

    // enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': [2, {
      allowImplicit: true
    }],

    // treat var statements as if they were block scoped
    'block-scoped-var': 2,

    // specify the maximum cyclomatic complexity allowed in a program
    complexity: [1, {
      max: 20
    }],

    // enforce that class methods use "this"
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [2, {
      exceptMethods: []
    }],

    // require return statements to either always or never specify values
    'consistent-return': 2,

    // specify curly brace conventions for all control statements
    curly: [2, 'multi-line'],

    // require default case in switch statements
    'default-case': [2, {
      commentPattern: '^no default$'
    }],

    // encourages use of dot notation whenever possible
    'dot-notation': [2, {
      allowKeywords: true
    }],

    // enforces consistent newlines before or after dots
    // https://eslint.org/docs/rules/dot-location
    'dot-location': [2, 'property'],

    // require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: [2, 'always', {
      null: 'ignore'
    }],

    // make sure for-in loops have an if statement
    'guard-for-in': 2,

    // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': [2, 2],

    // disallow the use of alert, confirm, and prompt
    'no-alert': 2,

    // disallow use of arguments.caller or arguments.callee
    'no-caller': 2,

    // disallow lexical declarations in case/default clauses
    // https://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 2,

    // disallow division operators explicitly at beginning of regular expression
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 1,

    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': [2, {
      allowElseIf: false
    }],

    // disallow empty functions, except for standalone funcs/arrows
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [2, {
      allow: [
        'arrowFunctions',
        'functions',
        'methods'
      ]
    }],

    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 2,

    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 2,

    // disallow use of eval()
    'no-eval': 2,

    // disallow adding to native types
    'no-extend-native': 2,

    // disallow unnecessary function binding
    'no-extra-bind': 2,

    // disallow Unnecessary Labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 2,

    // disallow fallthrough of case statements
    'no-fallthrough': 2,

    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,

    // disallow reassignments of native objects or read-only globals
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': [2, {
      exceptions: []
    }],

    // disallow implicit type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': [1, {
      boolean: true,
      number: true,
      string: true,
      allow: []
    }],

    // disallow var and named functions in global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 2,

    // disallow use of eval()-like methods
    'no-implied-eval': 2,

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 1,

    // disallow usage of __iterator__ property
    'no-iterator': 2,

    // disallow use of labels for anything other then loops and switches
    'no-labels': [2, {
      allowLoop: true,
      allowSwitch: true
    }],

    // disallow unnecessary nested blocks
    'no-lone-blocks': 2,

    // disallow creation of functions within loops
    'no-loop-func': 2,

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [2, {
      ignore: [0, 1, 2],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false
    }],

    // disallow use of multiple spaces
    'no-multi-spaces': [2, {
      ignoreEOLComments: true
    }],

    // disallow use of multiline strings
    'no-multi-str': 2,

    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 2,

    // disallow use of new operator for Function object
    'no-new-func': 2,

    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 2,

    // disallow use of (old style) octal literals
    'no-octal': 2,

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 2,

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [2, {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'staticContext' // for ReactRouter context
      ]
    }],

    // disallow usage of __proto__ property
    'no-proto': 2,

    // disallow declaring the same variable more then once
    'no-redeclare': 2,

    // disallow certain object properties
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [2, {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated'
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.'
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.'
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.'
    }],

    // disallow use of assignment in return statement
    'no-return-assign': [2, 'always'],

    // disallow redundant `return await`
    'no-return-await': 2,

    // disallow use of `javascript:` urls.
    'no-script-url': 2,

    // disallow self assignment
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': [2, {
      props: true
    }],

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,

    // disallow use of comma operator
    'no-sequences': 2,

    // restrict what can be thrown as an exception
    'no-throw-literal': 2,

    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 2,

    // disallow usage of expressions in statement position
    'no-unused-expressions': [2, {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false
    }],

    // disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 2,

    // disallow unnecessary .call() and .apply()
    'no-useless-call': 1,

    // Disallow unnecessary catch clauses
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 2,

    // disallow useless string concatenation
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 2,

    // disallow unnecessary string escaping
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 2,

    // disallow redundant return; keywords
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 2,

    // disallow use of void operator
    // https://eslint.org/docs/rules/no-void
    'no-void': 2,

    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': [1, {
      terms: ['todo', 'fixme', 'xxx'],
      location: 'start'
    }],

    // disallow use of the with statement
    'no-with': 2,

    // require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': [2, {
      allowEmptyReject: true
    }],

    // Suggest using named capture group in regular expression
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 2,

    // require use of the second argument for parseInt()
    radix: 2,

    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    // https://eslint.org/docs/rules/require-await
    'require-await': 1,

    // Enforce the use of u flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 1,

    // requires to declare all vars on top of their containing scope
    'vars-on-top': 2,

    // require immediate function invocation to be wrapped in parentheses
    // https://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': [2, 'outside', {
      functionPrototypeMethods: false
    }],

    // require or disallow Yoda conditions
    yoda: [2, 'never']
  }
};
