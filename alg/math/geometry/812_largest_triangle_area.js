// problem:
// https://leetcode.com/problems/largest-triangle-area/description/
/**
 * @param {number[][]} points
 * @return {number}
 */
// 3 <= points.length <= 50 ---> O(n^3)
// calculate triangle area with 3 points:
// - https://math.stackexchange.com/questions/516219/finding-out-the-area-of-a-triangle-if-the-coordinates-of-the-three-vertices-are
var largestTriangleArea = function (points) {
    let max_area = 0;

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                max_area = Math.max(max_area, area2(points[i], points[j], points[k]));
            }
        }
    }

    return max_area / 2;

    function area2(a, b, c) {
        return Math.abs(a[0] * b[1] + b[0] * c[1] + c[0] * a[1] - a[0] * c[1] - c[0] * b[1] - b[0] * a[1]);
    }
};