// problem:
// https://leetcode.com/problems/next-greater-element-i/

/**
 * if you search directly findNums on nums,
 * then you are on the wrong track.
 * This problem needs preprocessing on nums first
 * 
 * 2 conditions:
 * 1. if nums[i] > nums[i - 1],
 *    then nums[i] is the next greater element for nums[i - 1],
 *    use a hash table to store this result
 * 2. if nums[i] <= nums[i - 1],
 *    then both nums[i], nums[i - 1] will wait to see if 
 *         nums[i + 1] > nums[i] or nums[i - 1]
 * 
 * example:
 * [1,4,2,3,6,9,5]
 * 1. init stack as [1]
 * 2. 4 > 1, hash [1,4], pop 1, push 4
 * 3. 2 < 4, push 2, wait for larger num to pop
 * 4. 3 > 2, hash [2,3], pop 2, push 3
 * 5. 6 > 3, hash [3,6], pop 3
 *    6 > 4, hash [4,6], pop 4, push 6
 */
/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function (findNums, nums) {
    const map = new Map();
    const stack = [nums[0]];

    // preprocess nums
    for (let i = 1; i < nums.length; i++) {
        while ((stack.length > 0) && (nums[i] > stack[stack.length - 1])) {
            map.set(stack.pop(), nums[i]);
        }
        stack.push(nums[i]);
    }

    // get results
    return findNums.map((num) => map.get(num) || -1);
};