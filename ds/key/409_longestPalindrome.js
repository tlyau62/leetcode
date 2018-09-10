/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], !map.has(s[i]) ? 1 : (map.get(s[i]) + 1));
    }

    let len = 0, addedOdd = false;
    for (const [k, v] of map.entries()) {
        if (v % 2 == 0) {
            len += v;
        } else {
            if (!addedOdd) {
                len++;
                addedOdd = true;
            }
            len += v - 1;
        }
    }

    return len;
};

let result;
result = longestPalindrome("abcdefg");
console.log(result);