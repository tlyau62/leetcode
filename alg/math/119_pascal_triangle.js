/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {

    const map = [1];

    let i, j, t1, t2;
    for (i = 1; i <= rowIndex; i++) {
        map[i] = 1;
        t1 = map[0];
        t2 = map[1];
        for (j = 1; j < i; j++) {
            map[j] = t1 + t2;
            t1 = t2;
            t2 = map[j + 1];
        }
    }

    return map;
};