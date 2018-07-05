/**
 * dp
 * general idea:
 * - keep access the odd index will not produce the max, so as the even
 * - e.g. max can be obtained from odd indexes at the 1st half of the nums, but
 *        even indexes at the 2nd half of the sums
 * - so need to determine when to make changes, either from odd to even, or even to odd
 *
 * if current rob is at col i, then the next rob will be
 *    col i + 1 - no need to sum, as no two adjacent can sum together
 *    col i + 2 - do sum (i to (i + 2))
 *    col i + 3 - do sum (i to (i + 3))
 *              - but will overwrite the original value needed by current rob is at col i + 1 accessing (i + 1) + 2
 *              - solve overwrite by saving original value with variable "prev"
 *    col i + 4 - no need to do sum, since
 *              - it will be included in this current sequence also, that is col i + 2 accessing col (i + 2) + 1
 *              - or not included with current sequence, but included at col i + 1 accessing col (i + 1) + 2
 *
 * at last 2 cols, they will be the results, max of them is the solution              
 * 
 *
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    if (nums.length === 0) {
        return 0;
    } else if (nums.length <= 2) {
        return Math.max(...nums);
    }

    let prev, prev_sum;
    let i;

    prev = nums[2];
    for (i = 0; i < nums.length - 2; i++) {
        prev_sum = nums[i] + prev;
        if (prev_sum > nums[i + 2]) {
            nums[i + 2] = prev_sum;
        }
        if (i < nums.length - 3) {
            prev = nums[i + 3];
            nums[i + 3] += nums[i];
        }
    }

    return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};

var rob_faster = function (nums) {

    if (nums.length === 0) {
        return 0;
    } else if (nums.length <= 2) {
        return Math.max(...nums);
    }

    nums[2] += nums[0];
    if (nums.length > 3) {
        nums[3] += nums[0];
    }

    let i;
    for (i = 1; i < nums.length - 2; i++) {
        if (nums[i] > nums[i - 1]) {
            nums[i + 2] = nums[i + 2] - nums[i - 1] + nums[i];
        }
        if (i < nums.length - 3) {
            nums[i + 3] += nums[i];
        }
    }

    return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};

var rob_fastest = function (nums) {
    nums.unshift(0);
    for (let i = 3; i < nums.length; i++) {
        nums[i] += Math.max(nums[i - 3], nums[i - 2]);
    }
    return Math.max(nums[nums.length - 1], nums[nums.length - 2]) || 0;
};

// [2,0,4,8,9,3,10,6,7,1] 4
// [2,0,6,10,9,3,10,6,7,1] 8 
// [2,0,6,10,9,3,10,6,7,1] 9
// [2,0,6,10,15,9,10,6,7,1] 3
// [2,0,6,10,15,13,20,6,7,1] 10
// [2,0,6,10,15,13,25,21,7,1] 6
// [2,0,6,10,15,13,25,21,20,1] 7
// [2,0,6,10,15,13,25,21,32,26] 1
// [2,0,6,10,15,13,25,21,32,22] -

console.log(rob([2, 0, 4, 8, 9, 3, 10, 6, 7, 1]));



// best 48ms
// always rob this house, but keep 2 records on current rob and current not rob value
// 
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var rob = function(nums) {
//     var rob = 0;//max money can get if rob current house
//     var notrob = 0;//max money can get if not rob current house
//     for(var i = 0; i < nums.length; i++){
//         var currob = notrob + nums[i];
//         //if rob current val, previous house must not be robbed
//         notrob = Math.max(notrob, rob);
//         //if not rob ith hous, take the max value of robbed (i-1)house 
//         rob = currob;
//     }
//     return Math.max(rob, notrob);
// };