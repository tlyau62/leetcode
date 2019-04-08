/**
 * How does google search page number are generated?
 * Given minPageNo, maxPageNo, curPageNo(user currently reading) and windowSize.
 * E.g.
 * input: minPageNo = 0, maxPageNo = 999, curPageNo = 11 and windowSize = 10
 * output: min = 7, max = 16 [7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 * 
 * 
 * @param {*} minPageNo 
 * @param {*} maxPageNo 
 * @param {*} curPageNo 
 * @param {*} windowSize 
 */
function searchPageBound(minPageNo, maxPageNo, curPageNo, windowSize) {
    const bound = (windowSize - 1) / 2;
    let min, max;

    if (curPageNo < minPageNo || curPageNo > maxPageNo || windowSize <= 0) {
        throw new Error('out of range');
    }

    if (windowSize >= maxPageNo - minPageNo + 1) {
        return { min: minPageNo, max: maxPageNo };
    }

    min = curPageNo - ~~bound;
    max = curPageNo + Math.ceil(bound);

    // cut the invalid min range and put to max
    if (min < minPageNo) {
        max += minPageNo - min;
        min = 0;
    }

    // cut the invalid max range and put to min
    if (max > maxPageNo) {
        min -= max - maxPageNo;
        max = maxPageNo;
    }

    return { min, max };
}

let res;

res = searchPageBound(0, 100, 50, 5);
console.log(res);
console.log(res.max - res.min + 1);

res = searchPageBound(0, 100, 50, 10);
console.log(res);
console.log(res.max - res.min + 1);

res = searchPageBound(0, 100, 0, 10);
console.log(res);
console.log(res.max - res.min + 1);

res = searchPageBound(0, 100, 1, 10);
console.log(res);
console.log(res.max - res.min + 1);

res = searchPageBound(0, 100, 5, 10);
console.log(res);
console.log(res.max - res.min + 1);

res = searchPageBound(0, 100, 96, 10);
console.log(res);
console.log(res.max - res.min + 1);

res = searchPageBound(0, 100, 96, 1);
console.log(res);
console.log(res.max - res.min + 1);

res = searchPageBound(0, 999, 11, 10);
console.log(res);
console.log(res.max - res.min + 1);

res = searchPageBound(0, 3, 2, 10);
console.log(res);
console.log(res.max - res.min + 1);

res = searchPageBound(0, 9, 2, 10);
console.log(res);
console.log(res.max - res.min + 1);