/**
 * problem:
 * https://leetcode.com/problems/smallest-range-i/description/
 * 
 * mind flow:
 * 1. reminds me leetcode 462
 *    - https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/description/
 *    - quickly implements it using mean without any prove
 *    - 1st time: fail at case 61/68
 *    - 2nd time: fail at case 62/68 (replace Math.floor with Math.round)
 *    - give up this method
 * 2. reconsider example 2: [0, 10]
 *    - 0 is min, 10 is max
 *    - this answer is [2, 8]
 *    - this gives a guess on using min + K, max - K
 *    - but how it is useful?
 * 3. if (max - K) - (min + K) is <= 0
 *    this gives immediate anwser 0
 *    - why? 0 is already the smallest possible difference
 *    - is it possible to extend it to the global solution?
 * 4. let A = [min, d_i, d_i+1, ..., max]
 *    - one of our known ans is diff = (max - K) - (min + K)
 *    - is it possible for any d_i to replace max or min that cause the answer be even smaller?
 *    - no, if any d_i - K that can cause <= min,
 *          then the ans will be >= diff;
 *          if any d_i + K that can cause >= max,
 *          then the ans will be >= diff;
 *    - this concludes no other d_i can result < diff
 *    - so diff is the solution
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
    const max = Math.max(...A),
        min = Math.min(...A);

    let diffMaxMin = (max - K) - (min + K);
    if (diffMaxMin < 0) {
        diffMaxMin = 0;
    }
    return diffMaxMin;
}



// fail at case 62/68
var smallestRangeI3 = function (A, K) {
    const mean = Math.round(A.reduce((a, e) => a + e) / A.length);
    let min, max;

    min = Infinity;
    max = -Infinity;

    for (let a of A) {
        if (a < mean) {
            a += K;
            if (a > mean) {
                a = mean;
            }
        } else {
            a -= K;
            if (a < mean) {
                a = mean;
            }
        }
        min = Math.min(min, a);
        max = Math.max(max, a);
    }

    return max - min;

};

// fail at case 61/68
var smallestRangeI2 = function (A, K) {
    const mean = Math.floor(A.reduce((a, e) => a + e) / A.length);
    let min, max;

    min = Infinity;
    max = -Infinity;

    for (let a of A) {
        if (a < mean) {
            a += K;
            if (a > mean) {
                a = mean;
            }
        } else {
            a -= K;
            if (a < mean) {
                a = mean;
            }
        }
        min = Math.min(min, a);
        max = Math.max(max, a);
    }

    return max - min;

};