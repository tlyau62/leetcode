// prob:
// https://leetcode.com/problems/arithmetic-slices/submissions/1
//
// mind flow:
// 1. if the array contain only 1 Arithmetic sequence, what will happen?
//    [1,2,3] => result = 1
//    [1,2,3,4] => result = 3
//    [1,2,3,4,5] => result = 6
//    [1,2,3,4,5,6] => result = 10
//    [1,2,3,4,5,6,7] => result = 15
// 2. so, count how many arithmetic sequence in A, then accummulate arithmetic sums
// 3. time? O(n), beat 100% submission

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {

    const lists_sizes = [];
    let counter, diff;

    A.push('$');
    counter = 2;
    diff = A[1] - A[0];

    for (let i = 2; i < A.length; i++) {
        if (A[i - 1] === A[i] - diff) {
            counter++;
        } else {
            if (counter >= 3) {
                lists_sizes.push(counter - 2);
            }
            counter = 2;
            diff = A[i] - A[i - 1];
        }
    }

    // can be apply memerization to reduce time if lists_sizes is large
    return lists_sizes.reduce((a, e) => a + ((1 + e) * e / 2), 0);
};