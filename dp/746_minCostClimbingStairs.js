/**
 * dp: each cost at step i = min cost of step i - 1 or i - 2
 * time: O(n)
 * 
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    for (let i = 2; i < cost.length; i++) {
        cost[i] += Math.min(cost[i - 1], cost[i - 2]);
    }

    return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};

/*
 * [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 * [1, 100, 2, 3, 3, 103, 4, 5, 104, 6]
 */

let res;
res = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
console.log(res);