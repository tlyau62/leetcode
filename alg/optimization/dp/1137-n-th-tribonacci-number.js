/**
 * problem: https://leetcode.com/problems/n-th-tribonacci-number/
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    let a, b, c, d;

    a = -1;
    b = 1;
    c = 0;

    for (let i = 0; i <= n; i++) {
        d = a + b + c;
        a = b;
        b = c;
        c = d;
    }

    return d;
};