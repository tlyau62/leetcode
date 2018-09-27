/**
 * problem:
 * https://leetcode.com/problems/binary-gap/description/
 */
/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
    const bitstr = N.toString(2);
    let max = 0, start = Infinity;

    for (let i = 0; i < bitstr.length; i++) {
        if (bitstr[i] === '1') {
            max = Math.max(max, i - start);
            start = i;
        }
    }

    return max;

};