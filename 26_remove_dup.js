/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let distPtr = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[distPtr]) {
            swap(nums, ++distPtr, i);
        }
    }
    return distPtr + 1;
};

function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function verify(sol, newLength, target) {
    let same = true;

    for (let i = 0; i < target.length; i++) {
        if (target[i] !== sol[i]) {
            same = false;
            break;
        }
    }

    console.log((newLength === target.length) + ' ' + same);
}

let input = [1, 1, 2];
let newLength = removeDuplicates(input);
verify(input, newLength, [1, 2]);

input = [];
newLength = removeDuplicates(input);
verify(input, newLength, []);

input = [1];
newLength = removeDuplicates(input);
verify(input, newLength, [1]);

input = [1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 8, 9, 10];
newLength = removeDuplicates(input);
verify(input, newLength, [1, 2, 4, 8, 9, 10]);