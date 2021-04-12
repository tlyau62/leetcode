const Maybe = require("../algebraic-struct/maybe");
const head = require("./head");
const compose = require("./compose");

// safeHead :: [a] -> Maybe a
const safeHead = compose(Maybe.of, head);

module.exports = safeHead;
