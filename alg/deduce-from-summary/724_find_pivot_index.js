/**
 * mind flow:
 * 1. if i have the sum of all number, 
 *    subtract this sum with the pivot number,
 *    the result is equals to the sum of both left, right group of pivot
 * 2. draft the algorithm: (sum - current number) / 2 === left group
 * 3. time: O(n)
 * 4. try example 1
 *    try example 1, 7
 *    try example 1, 7, 3
 *    try example 3, 7, 3
 * 5. finalize the algorithm
 * 6. fix 1 bug: cur_sum += nums[i] should not put before the condition
 * 
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    const sum = nums.reduce((a, e) => a + e, 0);
    let cur_sum;

    cur_sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((sum - nums[i]) / 2 === cur_sum) {
            return i;
        }
        cur_sum += nums[i];
        // console.log(cur_sum + " " +  nums[i] + " " + (sum - nums[i]) / 2);
    }
    return -1;

};