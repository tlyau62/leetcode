/**
 * problem: https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/
 * 
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
    let a = 0;

    A.sort((a, b) => a - b);

    // negate as many negative number as possible according to K
    while (K > 0 && A[a] < 0 && a < A.length) {
        A[a] = -A[a];
        a++;
        K--;
    }

    // no effect if K is even
    if (K > 0 && K % 2 === 1) {
        // choose the number closest to 0 to become negative
        if (A[a - 1] < A[a]) {
            A[a - 1] = -A[a - 1];
        } else {
            A[a] = -A[a];
        }
    }

    return A.reduce((a, e) => a + e);
};