/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    const result = [];
    for (let i = left; i <= right; i++) {
        if (self_div(i)) {
            result.push(i);
        }
    }
    return result;
};

function self_div(num) {
    let digit, origin_num = num;
    for (; num > 0; num = Math.floor(num / 10)) {
        digit = num % 10;
        if (digit === 0 || (origin_num % digit !== 0)) {
            return false;
        }
    }
    return true;
}

let result;
result = selfDividingNumbers(21, 22);
console.log(result);