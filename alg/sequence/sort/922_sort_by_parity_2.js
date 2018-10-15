/**
 * mind flow:
 * 1. bucket sort
 * 
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
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