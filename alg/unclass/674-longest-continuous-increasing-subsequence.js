/**
 * problem: https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let maxLen = 0, curLen = 1;

    if (nums.length === 0) {
        return 0;
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            curLen++;
        } else {
            maxLen = Math.max(maxLen, curLen);
            curLen = 1;
        }
    }

    return Math.max(maxLen, curLen);
};