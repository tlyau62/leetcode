/**
 * brute force
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let a = 0, b = Math.floor(Math.sqrt(c)); // a: min, b: max
    let sum;

    while (a <= b) {
        sum = a * a + b * b;
        if (sum === c) {
            return true;
        } else if (sum < c) {
            a++; // inc a, since b is already max
        } else {
            b--; // desc b, since a is already max
        }
    }

    return false;
};