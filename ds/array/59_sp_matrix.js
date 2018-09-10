/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const matrix = [];

    for (let i = 0; i < n; i++) {
        matrix.push(new Array(n));
    }

    let dir = 0, currentNum = 1, maxNum = n * n;
    let i, j, dirChange = false;

    i = j = 0;

    while (currentNum <= maxNum) {

        if (dirChange) {
            dir = ((dir + 1) % 4);
            dirChange = false;
        } else {
            matrix[i][j] = currentNum++;
        }

        // next pos
        if (dir === 1) {
            if (i + 1 >= n || matrix[i + 1][j]) {
                dirChange = true;
            } else {
                i++;
            }
        } else if (dir === 0) {
            if (j + 1 >= n || matrix[i][j + 1]) {
                dirChange = true;
            } else {
                j++;
            }
        } else if (dir === 3) {
            if (i - 1 < 0 || matrix[i - 1][j]) {
                dirChange = true;
            } else {
                i--;
            }
        } else if (dir === 2) {
            if (j - 1 < 0 || matrix[i][j - 1]) {
                dirChange = true;
            } else {
                j--;
            }
        } else {
            throw 'invalid dir';
        }
    }

    return matrix;
};

console.log(generateMatrix(2));