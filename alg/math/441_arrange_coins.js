/**
 * problem: https://leetcode.com/problems/arranging-coins/description/
 * 
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    return Math.floor((-1 + Math.sqrt(1 + 4 * 2 * n)) * 0.5);
};