/* mind flow:
 * 1. if max value is pair with the min value,
 *    the max value will loss
 *    - how to reduce the loss among all the numbers?
 *    - max value pair up with the 2nd max value
 * 2. time(current) = O(n lg n)
 *    - use counting sort to reduce time to O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    return nums
        .sort((a, b) => a - b)
        .filter((a, i) => i % 2 === 0)
        .reduce((a, e) => a + e);
};