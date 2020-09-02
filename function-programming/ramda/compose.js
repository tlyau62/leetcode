const R = require('ramda');

const append = R.curry((append, s) => s + append);
const fastestCar = R.compose(
  append(' is the fastest'),
  R.prop('name'),
  R.last,
  R.sortBy(car => car.horsepower));

const cars = [{
  horsepower: 1,
  name: 'CarA'
},
{
  horsepower: 100,
  name: 'CarB'
}, {
  horsepower: 10,
  name: 'CarC'
}];

console.log(fastestCar(cars));

