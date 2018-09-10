/**
 * union to 1D + bin search => O(n) time, space
 * binary search => O(lg nm) time
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    let rowIdx = locateRow(0, matrix.length - 1); // bsearch on row
    return rowIdx === -1 ? false : locateCol(matrix[rowIdx], 0, matrix[rowIdx].length - 1) >= 0; // bsearch on col

    function locateRow(l, r) {

        if (l > r) {
            return -1; // not found
        }

        const mid = Math.floor((r + l) / 2);
        let head, tail;

        head = matrix[mid][0];
        tail = matrix[mid][matrix[mid].length - 1];

        if (target >= head && target <= tail) {
            return mid; // found
        } else if (target < head) {
            return locateRow(l, mid - 1); // search left
        } else {
            return locateRow(mid + 1, r); // search right
        }
    }

    function locateCol(row, l, r) {

        if (l > r) {
            return -1; // not found
        }

        const mid = Math.floor((r + l) / 2);

        if (row[mid] === target) {
            return mid; // found
        } else if (target < row[mid]) {
            return locateCol(row, l, mid - 1); // search left
        } else {
            return locateCol(row, mid + 1, r); // search right
        }
    }

};

let res;
res = searchMatrix([[-1, -3, -5, -7], [10, 11, 16, 20], [23, 30, 34, 46], [51, 52, 55, 60], [71, 82, 95, 160]], -7);