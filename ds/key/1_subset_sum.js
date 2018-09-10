/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * exactly one solution, and you may not use the same element twice.
 */
// complete search with hash
var twoSum = function (nums, target) {
    const hmap = new Map();
    let curIdx;

    nums.forEach((num, idx) => hmap.set(num, idx));
    for (const [idx, num] of nums.entries()) {
        curIdx = hmap.get(target - num);
        if (curIdx && curIdx !== idx) {
            return [idx, curIdx];
        }
    }

    return null;
};

function verify(nums, sols, target) {
    const sum = nums[sols[0]] + nums[sols[1]];
    return {
        sols,
        correct: sum === target,
        result: sum
    }
}

let nums, target;
// nums = [2, 7, 11, 15, -1, 2, 0, 5, 3];
// target = 1;

nums = [3,2,4];
target = 6;

console.log(verify(nums, twoSum(nums, target), target));
