/**
 * problem: https://leetcode.com/problems/fibonacci-number/
 * Converting a recursion tree of sub-problems into a linear list sub-problems
 * 
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    let a = 1, b = 0;

    for (let i = 0; i < N; i++) {
        b = a + b;
        a = b - a;
    }

    return b;
};