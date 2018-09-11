/**
 * mind flow:
 * 1. if all elements are the same, then the min move is 0
 * 2. if add 1 different element into this array, then the min move is abs(mode?? of nums - new value)
 *    [1,1,1,1] -> add 2 -> [1,1,1,1,2] -> final array = [1,1,1,1,1] with min move 1
 * 3. value of the final array is important
 * 4. the value of the final array must be between nums' min value and max value
 *    4.1. final value is equals to the average => disproven by a counter example [1,2,2]
 *    4.2. final value is equals to the mode => disproven by a counter example [1,2,3] (no mode)
 *    4.3. final value is equals to 1 of the element in nums => accepted, but time complexitiy is high O(n^2)
 * 5. try with median
 *
 * @param {number[]} nums
 * @return {number}
 */

// median
var minMoves2 = function (nums) {
    const median = quick_select(nums, ~~(nums.length / 2), 0, nums.length - 1);
    return nums.map(n => Math.abs(n - median)).reduce((a, b) => a + b);

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
};

// guess 2 (Accepted): brute force on 1 of the element in nums O(n^2) 
var minMoves2_3 = function (nums) {
    let min, move;

    min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        move = nums.map(n => Math.abs(n - nums[i])).reduce((a, b) => a + b);
        if (move < min) {
            min = move;
        }
    }

    return min;
};

// guess 1: greedy choose the avg num
var minMoves2_2 = function (nums) {
    const avg = ~~(nums.reduce((a, b) => a + b) / nums.length);
    return nums.map(n => Math.abs(n - avg)).reduce((a, b) => a + b);
};