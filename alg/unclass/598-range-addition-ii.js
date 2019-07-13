/**
 * problem: https://leetcode.com/problems/range-addition-ii/
 * 
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    const coord = [m, n];
    
    for (const op of ops) {
        op[0] < coord[0] && (coord[0] = op[0]);
        op[1] < coord[1] && (coord[1] = op[1]);
    }
    
    return coord[0] * coord[1];
};