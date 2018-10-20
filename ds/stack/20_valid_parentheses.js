/**
 * problem:
 * https://leetcode.com/problems/valid-parentheses/description/
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const closeBracket = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const c of s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else {
            if (top(stack) === closeBracket[c]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;

    function top(s) {
        return s[s.length - 1] || null;
    }
};