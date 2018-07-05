/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const zeros_cols = [];
    const zeros_rows = [];

    // scan zeros
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeros_rows[i] = true;
                zeros_cols[j] = true;
            }
        }
    }

    // set zeros rows
    for (let i = 0; i < zeros_rows.length; i++) {
        if (zeros_rows[i]) {
            setHor(i);
        }
    }

    for (let i = 0; i < zeros_cols.length; i++) {
        if (zeros_cols[i]) {
            setVer(i);
        }
    }

    function setVer(i) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][i] = 0;
        }
    }

    function setHor(i) {
        matrix[i].fill(0);
    }
};

let result;
result = setZeroes([[1], [0]]);