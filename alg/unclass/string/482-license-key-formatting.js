/**
 * problem: https://leetcode.com/problems/license-key-formatting/
 * 
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
    let s, res;

    S = S.split('').filter(s => s !== '-').reverse();
    s = 0;
    res = [];

    while (s < S.length) {
        for (let i = 0; i < K && s < S.length; i++) {
            res.push(S[s++]);
        }
        res.push('-');
    }

    return res.reverse().join('').slice(1, res.length).toUpperCase();
};