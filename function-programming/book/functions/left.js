const { Left } = require("../algebraic-struct/either");

// left :: a -> Either a b
const left = (a) => new Left(a);

module.exports = left;
