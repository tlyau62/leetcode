// https://leetcode.com/problems/toeplitz-matrix/description/
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {

    let cur_level = matrix[0];

    for (let i = 1; i < matrix.length; i++) {
        // compare cur_level[0:len - 2] to next_level[1:len - 1]
        for (let j = 1; j < matrix[i].length; j++) {
            //console.log(cur_level[j - 1] + ' ' + matrix[i][j]);
            if (cur_level[j - 1] !== matrix[i][j]) {
                return false;
            }
        }
        cur_level = matrix[i];
    }
    return true;
};