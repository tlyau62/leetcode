/**
 * identify cases first, then think how to solve
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let ptr, count;

    ptr = count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count <= 2) {
            nums[ptr] = nums[i];
            ptr++;
        }
    }

    return ptr;
};

let result;
result = removeDuplicates([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
console.log(result);