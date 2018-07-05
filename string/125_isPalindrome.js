/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().split('').filter(c => c >= 'a' && c <= 'z');
    r = s.slice().reverse();

    return s.join('') === r.join('');
};

let result;
result = isPalindrome("race a car");
console.log(result);