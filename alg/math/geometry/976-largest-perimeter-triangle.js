/**
 * problem: https://leetcode.com/problems/largest-perimeter-triangle/
 * 
 * key - Triangle inequality:  
 * - If x, y, and z are the lengths of the sides of the triangle,
 *   with no side being greater than z,
 *   then if x + y > z, then x, y, z form a triangle
 * 
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
    let sum;

    A.sort((a, b) => a - b);

    for (let i = A.length - 2; i >= 0; i--) {
        sum = A[i] + A[i + 1];
        if (sum > A[i + 2]) { 
            return sum + A[i + 2];
        } // if sum <= A[i + 2], a[i - 1] and a[a - 2] also can't form the triangle
    }

    return 0;
};