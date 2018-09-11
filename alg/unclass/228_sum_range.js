/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {

    const res = [];
    let start;

    nums.push(nums[nums.length - 1] + 2); // handle the end group in nums
    start = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] > 1) {
            res.push(start === nums[i - 1] ? start.toString() : `${start}->${nums[i - 1]}`);
            start = nums[i];
        }
    }

    return res;
};

var summaryRanges_no_opt = function (nums) {

    const res = [];
    let start, count;

    nums.push(-1);
    start = nums[0];
    count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) {
            count++;
        } else {
            if (count === 1) {
                res.push(start.toString());
            } else {
                res.push(`${start}->${nums[i - 1]}`);
            }
            count = 1;
            start = nums[i];
        }
    }

    return res;
};