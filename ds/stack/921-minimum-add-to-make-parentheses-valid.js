/**
 * problem: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 * 
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
    const stack = [];
    let miss = 0;

    for (const s of S) {
        if (s === '(') {
            stack.push(s);
        } else {
            if (top(stack) === '(') {
                stack.pop();
            } else {
                miss++;
            }
        }
    }

    return miss + stack.length;

    function top() {
        return stack[stack.length - 1];
    }
};