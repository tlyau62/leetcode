/**
 * insertion sort mod
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let currentPos = 0, j;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[currentPos] !== 0) {
            currentPos++;
            continue;
        }
        
        for (let j = currentPos + 1; j < nums.length; j++) {
            swap(nums, j - 1, j);
        }
        
        nums[nums.length - 1] = 0;
    }
};

function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}