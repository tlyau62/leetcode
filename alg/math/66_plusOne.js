/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // adder
    digits[digits.length - 1]++;

    // carrier
    for (let i = digits.length - 1; i >= 1; i--) {
        if (digits[i] >= 10) {
            digits[i - 1]++;
            digits[i] = 0;
        }
    }

    // handle overflow
    if (digits[0] >= 10) {
        digits[0] = 0;
        digits.unshift(1);
    }

    return digits;
};