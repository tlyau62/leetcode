/**
 * solve it like hex number system
 * 
 * @param {number} n (start from 1)
 * @return {string}
 */
var convertToTitle = function(n) {
    let title = [];
    for (; n > 0; n = Math.floor((n - 1)/ 26)) {
        title.push(String.fromCharCode((n - 1)% 26 + 65));
    }
    return title.reverse().join('');
};