// https://leetcode.com/problems/reshape-the-matrix/description/
// time, space: O(nm)
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    if (nums.length * nums[0].length !== r * c) {
        return nums;
    }

    const new_nums = [];
    let new_row;

    nums.push([null]); // add dummy data for last pushing to new_nums
    new_row = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length;) {
            if (new_row.length < c) {
                new_row.push(nums[i][j]);
                j++;
            } else {
                new_nums.push(new_row);
                new_row = [];
            }
        }
    }

    return new_nums;
};