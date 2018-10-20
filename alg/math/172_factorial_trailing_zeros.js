/**
 * problem:
 * https://leetcode.com/problems/factorial-trailing-zeroes/description/
 * 
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    const divs = [];
    let div = 1, count = 0;

    while (div < n) {
        div *= 5;
        divs.push(div);
    }

    for (const d of divs) {
        count += ~~(n / d);
    }

    return count;
};