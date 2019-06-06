/**
 * problem:
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements/description/
 * 
 * mind flow:
 * 1. how to inc n - 1 elements in 1 step?
 *    - dec the 1 element
 * 
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    const min = Math.min(...nums);
    return nums.reduce((a, e) => a + (e - min), 0);
};