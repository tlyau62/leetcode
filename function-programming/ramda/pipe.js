/**
 * https://ramdajs.com/docs/#compose
 */
const R = require('ramda');
const axios = require('axios');

const getUserData = function () {
  return axios.get('https://api.github.com/users');
}

const mapUsername = function (user) {
  return `${user.login} [id: ${user.id}]`;
}

const sortUsernameById = function (userA, userB) {
  return userA.id - userB.id;
}

const getRecentCreatedUser = R.pipe(
  getUserData,
  R.andThen(R.prop('data')),
  R.andThen(R.sort(sortUsernameById)),
  R.andThen(R.map(mapUsername))
);

getRecentCreatedUser().then(data => console.log(data));