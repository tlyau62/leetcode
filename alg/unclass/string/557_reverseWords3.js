// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(str => reverse(str)).join(' ');

    function reverse(s) {
        const re = [];
        for (let i = s.length - 1; i >= 0; i--) {
            re.push(s[i]);
        }
        return re.join('');
    }
};