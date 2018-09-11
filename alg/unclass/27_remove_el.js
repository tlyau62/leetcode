/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (nums.length === 0) {
        return 0;
    }

    let distPtr = 0; // num of el not eq to val
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            swap(nums, distPtr++, i);
        }
    }
    return distPtr;
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

let input = [3, 2, 2, 3];
let newLength = removeElement(input, 3);
verify(input, newLength, [2, 2]);

input = [0, 1, 2, 2, 3, 0, 4, 2];
newLength = removeElement(input, 2);
verify(input, newLength, [0, 1, 3, 0, 4]);

input = [];
newLength = removeElement(input, 2);
verify(input, newLength, []);

input = [1];
newLength = removeElement(input, 1);
verify(input, newLength, []);

input = [1,1,1];
newLength = removeElement(input, 1);
verify(input, newLength, []);

input = [2,2,2];
newLength = removeElement(input, 1);
verify(input, newLength, [2,2,2]);