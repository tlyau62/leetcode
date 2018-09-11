// problem:
// https://leetcode.com/problems/monotonic-array/description/
// 
// this prob is useful for checking numbers are correctly sort or not

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let isDec, isInc;
    
    isDec = isInc = true;
    
    for (let i = 1; i < A.length && (isDec || isInc); i++) {
        if (A[i - 1] > A[i]) {
            // not a increasing sequence
            isInc = false;
        } else if (A[i - 1] < A[i]) {
            // not decreasing sequence
            isDec = false;
        }
    }
    
    return isDec || isInc;
};