// https://en.wikipedia.org/wiki/Digital_root#Congruence_formula
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return 1 + (num - 1) % 9;
};