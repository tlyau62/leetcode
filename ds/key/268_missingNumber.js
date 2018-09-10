/**
 * use negative num can achieve O(1) space
 * 
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const map = [];
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = 1;
    }
    for (let i = 0; i <= map.length; i++) {
        if (map[i] !== 1) {
            return i;
        }
    }
    return null;
};