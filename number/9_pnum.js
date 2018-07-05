/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    // split digits
    const digits = [];
    while (x !== 0) {
        digits.push(x % 10);
        x = Math.floor(x / 10);
    }

    // check p
    for (let i = 0; i < digits.length / 2; i++) {
        if (digits[i] !== digits[digits.length - i - 1]) {
            return false;
        }
    }

    return true;
};

function verify(input, target) {
    console.log(input + ' ' + (input === target));
}

verify(isPalindrome(121), true);
verify(isPalindrome(-121), false);
verify(isPalindrome(10), false);
verify(isPalindrome(111), true);
verify(isPalindrome(11111), true);
verify(isPalindrome(2111112), true);
verify(isPalindrome(211123), false);
verify(isPalindrome(0), true);