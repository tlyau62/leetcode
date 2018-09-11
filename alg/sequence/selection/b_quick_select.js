/**
 * best O(n): do only 1 partition
 * worst O(n^2): sorted num => do partition on each elements
 * avg O(n): 
 * 1. pivot chosen is always the median of the nums
 * 2. so, the pivot can always split the nums into 2 equals size left, right group
 * 3. see prove: https://stackoverflow.com/questions/5945193/average-runtime-of-quickselect
 * 
 * ref: https://en.wikipedia.org/wiki/Quickselect
 */

// k starts from 0
function quick_select(nums, k, left, right) {

    if (left > right) {
        return -1;
    }

    const p = partition(nums, left, right);

    if (p === k) {
        return nums[p];
    } else if (p < k) {
        return quick_select(nums, k, p + 1, right);
    } else {
        return quick_select(nums, k, left, p - 1);
    }

    function partition(nums, left, right) {
        const p_val = nums[right];

        for (let i = left; i < right; i++) {
            if (nums[i] < p_val) {
                swap(nums, left, i);
                left++;
            }
        }

        swap(nums, left, right);

        return left;
    }

    function swap(nums, i, j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

}

let res;
let nums = [5, 3, 1, 8, 4];

res = quick_select(nums, 4, 0, nums.length - 1);
console.log(res);