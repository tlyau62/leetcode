/**
 * https://leetcode.com/problems/di-string-match/description/
 */

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
    const res = [];
    let left, right, s;

    s = 0;
    left = 0;
    right = S.length;

    while (left < right) {
        if (S[s] === 'I') {
            res.push(left++);
        } else {
            res.push(right--);
        }
        s++;
    }

    res.push(left);

    return res;
};