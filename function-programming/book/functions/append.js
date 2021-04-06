const flip = require("./flip");
const concat = require('./concat');

// append :: String -> String -> String
const append = flip(concat);

module.exports = append;
