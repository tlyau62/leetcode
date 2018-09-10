/**
 * solving unorder number series problem with O(n), normal needs a hash table
 * else sort the series with O(n lg n)
 * - http://bangbingsyb.blogspot.com/2014/11/leetcode-first-missing-positive.html
 * 
 * time: O(n)
 * space: O(n), no extra space. Assume that input size is n, where n is the max value of nums.
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    if (nums.length === 0) {
        return 1;
    }
    return solve(nums);
};

function solve(nums) {
    // convert nums to hash table, still O(n) where n is the max value of nums
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            nums[i] = null;
        }

        if (i !== nums[i]) {
            if (!nums[nums[i]]) {
                swap(nums, i, nums[i]);
            } else if (nums[i] === nums[nums[i]]) {
                nums[i] = null;
            } else {
                nums.push(nums[nums[i]]);
                nums[nums[i]] = nums[i];
                nums[i] = null;
            }
        }
    }

    // search undefined / null
    for (let i = 1; i < nums.length; i++) {
        if (!nums[i]) {
            return i;
        }
    }

    return nums[nums.length - 1] + 1;
}

function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

let result;
// result = firstMissingPositive([1, 2, 0]);
// console.log(result);
// result = firstMissingPositive([3, 4, -1, 1]);
// console.log(result);
// result = firstMissingPositive([7, 8, 9, 11, 12]);
// console.log(result);
result = firstMissingPositive([1]);
console.log(result);