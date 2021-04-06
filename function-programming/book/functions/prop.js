const curry = require("./curry");

// prop :: String -> Object -> a
const prop = curry((p, obj) => obj[p]);

module.exports = prop;
