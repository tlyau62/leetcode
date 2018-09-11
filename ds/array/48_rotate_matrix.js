/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    rotate90(matrix);
};

function rotate90(matrix) {
    matrix = matrix.reverse();

    let x, y;

    // upper triangle
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < Math.ceil(i / 2); j++) {
            x = i - j;
            y = j;
            swap(matrix, x, y, y, x);
        }
    }

    // lower triangle
    let k, bound;
    for (let i = 1; i < matrix.length - 1; i++) {
        k = 1;
        bound = Math.floor((i + matrix.length) / 2);
        for (let j = i; j < bound; j++) {
            x = j;
            y = matrix.length - k++;
            swap(matrix, x, y, y, x);
        }
    }
}

function swap(matrix, m, n, o, p) {
    const temp = matrix[m][n];
    matrix[m][n] = matrix[o][p];
    matrix[o][p] = temp;
}

let result, matrix;
matrix = [[1,13,2,5,12,16],[5,3,4,1,8],[5,6,8,9,5],[14,7,10,11,1]];
result = rotate90(matrix);
console.log(matrix);