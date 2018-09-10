/**
 * problem:
 * https://leetcode.com/problems/single-element-in-a-sorted-array/description/
 * 
 * idea:
 * consider an array without the distinct one
 * [1,1,2,2,3,3]
 * 
 * how many ways to insert this distinct one? 4
 * [(0),1,1,2,2,3,3]
 * [1,1,(2),3,3,4,4]
 * [1,1,2,2,(3),4,4]
 * [1,1,2,2,3,3,(4)]
 * 
 * now create a middle group into original array and
 * compare it to the 4 new generated array. What will happen?
 * [1,1,|2,2|,3,3]
 * [0,1,|1,2|,2,3,3]
 * [1,1,|2,3|,3,4,4]
 * [1,1,|2,2|,3,4,4]
 * [1,1,|2,2|,3,3,4]
 * 
 * observations:
 * if the distinct one is on left of middle gp,
 * then the middle gp has different elements,
 * else same elements
 * 
 * why it happens?
 * if insert on the left of the middle gp,
 * then one of the elements in the middle gp is pushed to left
 * else no affect
 * 
 * to preserve the original data ordering,
 * we can make these partition to reduce the next searching size,
 * while keeping the distinct one in the partition
 * [0,1,|1,2|,2,3,3] => [0,1,1]
 * [1,1,|2,3|,3,4,4] => [1,1,2]
 * [1,1,|2,2|,3,4,4] => [3,4,4]
 * [1,1,|2,2|,3,3,4] => [3,3,4]
 * 
 * if you recursively divide the prob,
 * you finall get 1 element, which is the distinct one
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {

    return dfs(nums, 0, nums.length - 1);

    function dfs(nums, left, right) {

        if (left === right) {
            return nums[left];
        }

        const numOfGroup = (right - left + 1) / 2;
        const midGroupIndex = ~~((numOfGroup - 1) / 2);
        let midGroupStartIndex = left + midGroupIndex * 2;

        // after adding 1 element in the nums
        if (nums[midGroupStartIndex] !== nums[midGroupStartIndex + 1]) {
            // go left
            return dfs(nums, left, midGroupStartIndex);
        } else {
            // go right
            return dfs(nums, midGroupStartIndex + 2, right);
        }
    }
};

// singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 36, 36, 37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 50, 50]);
singleNonDuplicate([1, 1, 2, 2, 3, 4, 4]);