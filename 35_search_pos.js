/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // alg input valid
    if (nums.length === 0) {
        return 0;
    }

    return bsearch(nums, target, 0, nums.length - 1);
};

function bsearch(nums, target, start, end) {
    const mid = Math.floor((start + end) / 2);

    // target exceed array bound
    if (target < nums[start]) {
        return start;
    }
    if (target > nums[end]) {
        return end + 1;
    }

    // target found
    if (nums[mid] === target) {
        return mid;
    }

    // recur
    if (nums[mid] < target) {
        return bsearch(nums, target, mid + 1, end);
    }

    return bsearch(nums, target, start, mid - 1);
}

function verify() {
    let res;
    for (let i = 0; i < 10; i++) {
        res = searchInsert([1, 3, 5, 6], i);
        console.log(i + ' ' + res);
    }
}
verify([1, 3, 5, 6]);
// searchInsert([1, 3, 5, 6], 4);
