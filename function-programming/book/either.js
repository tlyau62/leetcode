const { Either } = require("./algebraic-struct/either");
const left = require("./functions/left");
const prop = require("./functions/prop");

let result;

result = Either.of("rain").map((str) => `b${str}`);
// Right('brain')

result = left("rain").map(
  (str) => `It's gonna ${str}, better bring your umbrella!`
);
// Left('rain')

result = Either.of({ host: "localhost", port: 80 }).map(prop("host"));
// Right('localhost')

result = left("rolls eyes...").map(prop("host"));
// Left('rolls eyes...')
