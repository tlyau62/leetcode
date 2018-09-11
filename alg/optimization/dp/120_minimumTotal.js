/**
 * dij not work => -ve edge may exists
 * dp => new cost at current cell (i,j) = min(cell(i - 1, j - 1), cell(i - 1, j)) + old cost at current cell (i, j)
 *
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let i, j, current;
    for (i = 0; i < triangle.length - 1; i++) {
        for (j = 0; j < triangle[i].length; j++) {
            current = triangle[i][j];
            if (j === 0) {
                triangle[i + 1][j] += current;
                triangle[i + 1][j + 1] += current;
            } else {
                triangle[i + 1][j] = Math.min(triangle[i + 1][j], triangle[i + 1][j] - triangle[i][j - 1] + current);
                triangle[i + 1][j + 1] += current;
            }
        }
    }

    return Math.min(...triangle[triangle.length - 1]);

};