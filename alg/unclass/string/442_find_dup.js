// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
// 2 methods - both will reuse the input space
// - 1. convert input array to hash table under O(n) time
// - 2. treat each visited element as index, make the its pos value be -ve number as visited
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const res = [];
    let abs;
    for (let i = 0; i < nums.length; i++) {
        abs = Math.abs(nums[i]);
        if (nums[abs - 1] < 0) {
            res.push(abs);
        } else {
            nums[abs - 1] *= -1;
        }
    }
    return res;
};