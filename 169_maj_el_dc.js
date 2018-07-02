/**
 * divide-and-conquer
 * - a problem p = a set of unknown solutions {s1, s2, ..., sn}
 *   - solved p = found all solutions s1 to sn
 * - subproblem sp = a subset of p
 *   - solved sp = found a subset of p
 * - input = a instance of problem 
 * 
 * Divide-and-conquer
 * 1. break p into multiple sp
 * 2. solve each sp individually
 * 3. combine each sp to form p
 * 
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    return solve(nums, 0, nums.length - 1);
};

function solve(nums, l, r) {
    // base
    const len = r - l + 1;
    if (len === 1) {
        return nums[l];
    } else if (len === 2) {
        if (nums[r] === nums[l]) {
            return nums[r];
        } else {
            return null;
        }
    }

    // split
    const mid = Math.floor((r + l) / 2);
    const left = solve(nums, l, mid);
    const right = solve(nums, mid + 1, r);

    // combine
    if (left === right) {
        return left;
    } else {
        return maj(nums, l, r, len);
    }
}

function maj(nums, l, r, len) {
    const half = Math.floor(len / 2);  // len > 2
    const map = new Map();
    let cur_num, cur_count;

    for (let i = l; i <= r; i++) {
        cur_num = nums[i];
        cur_count = map.get(cur_num);

        if (!cur_count) {
            map.set(cur_num, 1);
        } else if (cur_count + 1 > half) {
            return cur_num;
        } else {
            map.set(cur_num, cur_count + 1);
        }
    }

    return null;
}

let result;
result = majorityElement([3, 2, 3]);
console.log(result);