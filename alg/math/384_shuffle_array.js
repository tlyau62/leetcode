//problem: https://leetcode.com/problems/shuffle-an-array/description/
// O(n lg n)

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    const weights = [];

    for (const n of this.nums) {
        weights[n] = Math.random();
    }

    return this.nums.slice().sort((a, b) => weights[a] - weights[b]);
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */