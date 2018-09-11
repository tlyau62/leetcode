/**
 * dp + keep tracking for max product
 * - time: O(n^2), space: O(n)
 * - mem table for test case 5, 2, 4, 8
 * 5   2  4  8
 * 10  8  32	 (mem[j] * nums[j + 1])
 * 40  64		 (mem[j] * nums[j + 2])
 * 320			 (mem[j] * nums[j + 3])
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct_slow = function (nums) {

    const mem = [...nums];
    let max, prod, i, j;

    max = Math.max(...mem);
    for (i = 1; i < nums.length; i++) {
        for (j = 0; j < nums.length - i; j++) {
            prod = mem[j] * nums[j + i];
            if (prod > max) {
                max = prod;
            }
            mem[j] = prod;
        }
    }

    return max;
};

// test cases
// [2,3,-2,4]
// [5,2,4,8]
// [19,10,14,12,16,15,2,3,8,4]
// [5]
// [1,2]

var maxProduct = function (nums) {
    if (nums.length == 0)
        return 0;
    // 全局最优
    var global = nums[0];
    // 局部最大值
    var max = nums[0];
    // 局部最小值
    var min = nums[0];
    for (var i = 1; i < nums.length; i++) {
        // 此时的max和min是上次的最大值最小值
        var maxTemp = Math.max(max * nums[i], min * nums[i]);
        var minTemp = Math.min(max * nums[i], min * nums[i]);
        // 本次最大max最小min
        max = Math.max(maxTemp, nums[i]);
        min = Math.min(minTemp, nums[i]);
        // 本次的全局最优
        global = Math.max(global, max);
    }
    return global;
}

maxProduct([5, 2, 4, 8]);