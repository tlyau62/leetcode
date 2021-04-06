const curry = require("./curry");

// concat :: String -> String -> String
const concat = curry((a, b) => a.concat(b));

module.exports = concat;
