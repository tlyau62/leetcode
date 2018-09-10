/**
 * prob: https://leetcode.com/problems/product-of-array-except-self/description/
 * 
 * mind flow:
 * 1. take example nums = [1, 2, 3, 4]
 * - res[0] can be computed by scanning backward on nums => 4 * 3 * 2
 * - res[nums.length - 1] can be computed by scanning forwards on nums => 1 * 2 * 3
 * - this gives the intuition on using 2-pass
 *
 * 2. to get res[1]
 * - calculate 1-pass from left => 1
 * - calculate 1-pass from right => 4, 3
 * - this gives all the numbers required => 1, 3, 4
 *
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n)
var productExceptSelf = function(nums) {
    const res = [];
    
    for (let i = 0; i < nums.length; i++) {
        res[i] = 1;
    }

    let acc;
    
    acc = 1;
    for (let i = 1; i < nums.length; i++) {
        acc *= nums[i - 1]; // calcuate accumlate product
        res[i] *= acc; // write down the res
    }
     
    acc = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        acc *= nums[i + 1];
        res[i] *= acc;
    }
    
    return res;
};

// O(n^2)
var productExceptSelf_2 = function(nums) {
    const res = [];
    
    for (let i = 0; i < nums.length; i++) {
        res[i] = 1;
    }
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                res[i] *= nums[j];
            }
        }
    }
    
    return res;
};