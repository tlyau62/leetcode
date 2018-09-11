/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    
    if (A.length === 0) {
        return [];
    }
    
    const m = A.length;
    const n = A[0].length;
    const matrix = [];

    let i, j;
    for (i = 0; i < n; i++) {
        matrix.push([]);
    }

    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            matrix[j][i] = A[i][j];
        }
    }

    return matrix;
};

transpose([[1, 2, 3], [4, 5, 6]]);