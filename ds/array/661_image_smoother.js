// problem:
// https://leetcode.com/problems/image-smoother/description/
//
// note: M is not a square matrix

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {

    const res = Array(M.length).fill(null).map(() => []);

    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[i].length; j++) {
            res[i][j] = sumSquare(M, i, j);
        }
    }

    return res;

    function sumSquare(M, i, j) {
        let i2, j2, sum, count;

        count = sum = 0;

        for (let off_i = -1; off_i <= 1; off_i++) {
            i2 = i + off_i;
            if (i2 < 0 || i2 >= M.length) {
                continue;
            }
            for (let off_j = -1; off_j <= 1; off_j++) {
                j2 = j + off_j;
                if (j2 < 0 || j2 >= M[i2].length) {
                    continue;
                }
                sum += M[i2][j2];
                count++;

            }
        }

        return Math.floor(sum / count);
    }
};