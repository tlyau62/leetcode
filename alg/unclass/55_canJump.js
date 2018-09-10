/**
 * O(n), last element no need to consider
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {

    let i, j;
    for (i = nums.length - 2; i >= 0; i--) {
        if (nums[i] !== 0) {
            continue;
        }

        for (j = i - 1; j >= 0; j--) {
            if (j + nums[j] > i) {
                i = j; // no need to i = j - 1; -1 is done in loop cont stmt
                break;
            }
        }

        if (j === -1) {
            return false;
        }
    }

    return true;
};

let result;
result = canJump([0, 3, 1, 0, 4, 3, 2, 0, 1]);
console.log(result);