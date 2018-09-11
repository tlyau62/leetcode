/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    if (strs.length === 0) {
        return '';
    } else if (strs.length === 1) {
        return strs[0];
    }

    let isEnd = false;
    let i = 0;
    let cp = [], c;

    while (!isEnd) {
        c = strs[0][i];
        if (!c) {
            break;
        }

        for (let j = 1; j < strs.length; j++) {
            if (c !== strs[j][i]) {
                isEnd = true;
                break;
            }
        }
        if (!isEnd) {
            cp.push(c);
        }
        i++;
    }

    return cp.join('');
};

function verify(input, target) {
    console.log(input + ' ' + (input === target));
}

verify(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
verify(longestCommonPrefix(["dog", "racecar", "car"]), "");
verify(longestCommonPrefix(["flower"]), "flower");
verify(longestCommonPrefix(["aaa", 'aaa', 'aaaa']), "aaa");
verify(longestCommonPrefix(["aaa", '', 'aaaa']), '');
verify(longestCommonPrefix(["aaa", 'a', 'aaaa', 'abcd']), 'a');
verify(longestCommonPrefix(["", 'a', 'aaaa', 'abcd']), '');
verify(longestCommonPrefix([]), '');
verify(longestCommonPrefix(['']), '');
verify(longestCommonPrefix(['', '']), '');
verify(longestCommonPrefix(['', '', '']), '');
verify(longestCommonPrefix(['', 'abc', '']), '');
verify(longestCommonPrefix(['c', '', 'a']), '');
verify(longestCommonPrefix(['c', 'c']), 'c');