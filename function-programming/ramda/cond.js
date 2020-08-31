const R = require('ramda');

const water = R.cond([
  [R.equals(0), R.always("freeze at 0")],
  [R.equals(100), R.always("boils at 100")],
  [R.T, temp => `nothing happen at ${temp}`]
]);

console.log(water(10));