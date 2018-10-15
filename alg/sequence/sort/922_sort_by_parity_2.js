/**
 * mind flow:
 * 1. bucket sort
 * 
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII_opt = function (A) {
    let evenIdx = 0, oddIdx = 1;
    const res = [];

    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            res[evenIdx] = A[i];
            evenIdx += 2;
        } else {
            res[oddIdx] = A[i];
            oddIdx += 2;
        }
    }

    return res;
};

var sortArrayByParityII = function (A) {
    const oddAvail = [], evenAvail = [];
    const res = [];

    for (let i = 0; i < A.length; i++) {
        getAvail(oddAvail, evenAvail, i).push(i);
    }

    for (let i = 0; i < A.length; i++) {
        res[getAvail(oddAvail, evenAvail, A[i]).pop()] = A[i];
    }

    return res;

    function getAvail(oddAvail, evenAvail, i) {
        if (i % 2 === 0) {
            return evenAvail;
        }
        return oddAvail;
    }
};