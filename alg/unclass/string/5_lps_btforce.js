/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let res = '';
    let substr;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            substr = s.substring(i, j + 1);
            if (checkPalindrome(substr) && substr.length > res.length) {
                res = substr;
            }
        }
    }

    return res;
};

function checkPalindrome(s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
}

function verify(str, output) {
    let result = longestPalindrome(str);
    console.log(result + ' ' + (result === output));
}

verify('babad', 'bab');
verify('cbbd', 'bb');
verify('', '');
verify('ssaascascoiajscasciooicsaoijasc', 'asciooicsa');