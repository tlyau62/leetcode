/**
 * @param {number} n
 * @return {boolean}
 */
// pattern: 
// 1. repeating 10101010..
// 2. the ending is either with/without extra 1
// 1
// 10
// 101
// 1010
// 10101
// 101010
// 1010101
const pat = new RegExp('^(10)*1?$');
var hasAlternatingBits = function (n) {
    return pat.test(n.toString(2));
};