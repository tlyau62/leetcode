/**
 * apply the same method as 70_climbStairs.js
 * you will get the following series on N from 1 to 10
 * 1, 2, 5, 11, 24, 53, 117, 258, ...
 *
 * observations
 * 1. mem[i] is very close to 2 * mem[i - 1]
 * 2. mem[i] - 2 * mem[i - 1] is exactly at location i - 3
 * 3. apply dp
 * 
 * @param {number} N
 * @return {number}
 */
var numTilings = function (N) {
    const mem = [1, 2, 5];

    if (N <= 3) {
        return mem[N - 1];
    }

    for (let i = 3; i < N; i++) {
        mem[i] = (mem[i - 1] * 2 + mem[i - 3]) % 1000000007;
    }

    return mem[N - 1];

};