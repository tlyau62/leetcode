/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const regex = new RegExp('^' + p + '$', 'g')
    return regex.test(s);
};

function verify(input, target) {
    console.log(input + ' ' + (input === target));
}

verify(isMatch('aa', 'a'), false);
verify(isMatch('aa', 'a*'), true);
verify(isMatch('ab', '.*'), true);
verify(isMatch('aab', 'c*a*b'), true);
verify(isMatch('mississippi', 'mis*is*p*.'), false);