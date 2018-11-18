/**
 * problem:
 * https://leetcode.com/problems/valid-mountain-array/description/
 * 
 * mind flow:
 * 1. how to check a number list is sorted
 * 2. consider cases: valid mountain, only inc seq, only dec seq
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {

    let state;

    // 0: init, 1: inc, 2: dec
    state = 0;

    for (let i = 1; i < A.length; i++) {
        if (A[i] === A[i - 1]) {
            return false;
        } else if (A[i] < A[i - 1]) {
            if (state === 0) {
                return false;
            } else if (state === 1) {
                state++;
            }
        } else if (A[i] > A[i - 1]) {
            if (state === 0) {
                state++;
            } else if (state === 2) {
                return false;
            }
        }
    }

    return state === 2;
};