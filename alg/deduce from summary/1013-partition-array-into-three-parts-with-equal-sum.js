/**
 * problem: https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
 * 
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
    const partSum = A.reduce((a, b) => a + b) / 3;
    let partAcc, a, remainSum;

    if (!Number.isInteger(partSum)) {
        return false;
    }

    a = 0;
    for (let i = 1; i <= 3; i++) {
        partAcc = 0;

        while (a < A.length && partAcc !== partSum) {
            partAcc += A[a];
            a++;
        }
    }

    remainSum = 0;
    for (let j = a; j < a.length; j++) {
        remainSum += A[j];
    }

    return partAcc === partSum && remainSum === 0; // partAcc !== partSum => < 3 partitions, remainSum !== 0 => can't form partition or > 3 partitions
};

canThreePartsEqualSum([10, -7, 13, -14, 30, 16, -3, -16, -27, 27, 19]);