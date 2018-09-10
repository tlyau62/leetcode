/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let sqrt = Math.sqrt(num);
    return Math.ceil(sqrt) === Math.floor(sqrt);
};