// 'off' or 0 - turn the rule off
// 'warn' or 1 - turn the rule on as a warning (does not affect exit code)
// 'error' or 2 - turn the rule on as an error (exit code will be 1)


module.exports = {
  rules: {
    // babel inserts `'use strict';` for us
    strict: ['error', 'never']
  }
};
