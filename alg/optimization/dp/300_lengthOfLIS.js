/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const dp = [];
    let i, j, lis;
    for (i = 0; i < nums.length; i++) {
        dp[i] = 1;
        for (j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};

let result;
result = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
console.log(result);
result = lengthOfLIS([5, 2, 8, 6, 3, 6, 9, 7]);
console.log(result);

// 10 9 2 5 3 7 101 18
//  1 1 1 

// 5 2 8 6 3 6 9 7
// 1 1 2 2 2 3 4 4
