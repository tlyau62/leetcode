const curry = require("./curry");

// flip :: (a -> b -> c) -> b -> a -> c
const flip = curry((fn, a, b) => fn(b, a));

module.exports = flip;
