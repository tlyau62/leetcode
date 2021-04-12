const curry = require("./curry");

// match :: RegExp -> String -> Boolean
const match = curry((re, str) => re.test(str));

module.exports = match;
