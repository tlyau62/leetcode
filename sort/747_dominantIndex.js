/**
 * sort 
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let sortIdx;

    // sort on index
    sortIdx = Array(nums.length).fill(0).map((n, i) => i);
    sortIdx = sortIdx.sort((a, b) => nums[a] - nums[b]);

    let current, max;
    max = nums[sortIdx[sortIdx.length - 1]];
    current = nums.length - 2;

    while (current >= 0) {
        if (max < 2 * nums[sortIdx[current]]) {
            return -1;
        } else {
            current--;
        }
    }

    return sortIdx[sortIdx.length - 1];
};

/*
 * [3, 6, 1, 0]
 * [0, 1, 4, 6]
 *
 */