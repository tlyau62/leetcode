/**
 * problem: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * inspire by: 11-container-with-most-water.js
 * idea:
 * 1. let sum = min + max
 *    if sum === target, then target is the ans
 *    if sum > target,
 *        then increase the min pointer has no useful result
 *        so decrease the max pointer
 *    if sum < target,
 *        then decrease the max pointer has no useful result
 *        so increase the min pointer
 * 2. step 1 forms the subproblem (linear),
 *    answering this question forms a local solution,
 *    solving them all in order leads to the global solution
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let l, r, sum;

    l = 0;
    r = numbers.length - 1;

    while (l < r) {
        sum = numbers[l] + numbers[r];

        if (sum === target) {
            return [l + 1, r + 1];
        } else if (sum > target) {
            r--;
        } else {
            l++
        };
    }
};