/**
 * refs:
 * 1. https://ramdajs.com/docs/#curry
 */

const R = require('ramda');

/**
 * No curry
 */
const add = (a, b, c) => a + b + c;

add(1, 2, 3); // 6
add(1, 2); // undefined

/**
 * With curry
 */
const curryAdd = R.curry(add);

curryAdd(1)(2)(3); // 6
curryAdd(1, 2)(3); // 6
curryAdd(1)(2, 3); // 6

/**
 * Fix params
 */
const fixedParamsAdd = curryAdd(1);
fixedParamsAdd(2, 3); // 6
fixedParamsAdd(4, 5); // 10

const fixed2ParamsAdd = curryAdd(R.__, 2, 3);

fixed2ParamsAdd(10); // 15

/**
 * Practical use: Filter, sort
 */
const filterSort = R.curry(function (arr, filter, sort) {
  return arr.filter(filter).sort(sort);
});

const dataSet = filterSort([{
  id: 10,
  name: 'Peter'
}, {
  id: 1,
  name: 'Mary'
}, {
  id: 2,
  name: 'Pan'
}]);

const nameStartWithP = dataSet((f) => f.name[0] === 'P');
const sortByIdAsc = nameStartWithP((a, b) => a.id - b.id);
const sortByIdDesc = nameStartWithP((a, b) => b.id - a.id);
const noSort = nameStartWithP(undefined);

console.log(sortByIdAsc); // [ { id: 2, name: 'Pan' }, { id: 10, name: 'Peter' } ]
console.log(sortByIdDesc); // [ { id: 10, name: 'Peter' }, { id: 2, name: 'Pan' } ]
console.log(noSort);