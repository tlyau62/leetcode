/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {
    let rev = str.trim().split(' ');
    rev = rev.filter(s => s !== '');
    return rev.reverse().join(' ');
};

console.log(reverseWords('the sky is  blue'));
console.log(reverseWords('a  '));
console.log(reverseWords('   a'));
console.log(reverseWords(''));