/**
 * problem: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 * 
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    const stack = [];

    for (const s of S) {
        (!stack.length || top(stack) !== s) ? stack.push(s) : stack.pop();
    }

    return stack.join('');

    function top(arr) {
        return arr[arr.length - 1];
    }
};