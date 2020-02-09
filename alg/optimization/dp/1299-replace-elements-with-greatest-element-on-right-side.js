/**
 * problem: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * 
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let max = -1, cur;

    for (let i = arr.length - 1; i >= 0; i--) {
        cur = arr[i];
        arr[i] = max;
        if (cur > max) {
            max = cur;
        }
    }

    return arr;
};