// problem:
// https://leetcode.com/problems/student-attendance-record-i/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    let A;

    A = ~~(s[0] === 'A') + ~~(s[1] === 'A');

    for (let i = 2; i < s.length; i++) {
        if (s[i] === 'A') {
            A++;
        }
        if (s[i] === 'L' && s[i] === s[i - 1] && s[i - 1] === s[i - 2]) {
            return false;
        }
    }

    return A <= 1;

};