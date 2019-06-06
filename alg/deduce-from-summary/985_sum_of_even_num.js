/**
 * problem: https://leetcode.com/problems/sum-of-even-numbers-after-queries/description/
 * 
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    const res = [];
    let cur, sumEven;
    
    sumEven = A.filter((e) => e % 2 === 0).reduce((a, e) => a + e, 0);
    
    for (const query of queries) {
        if (A[query[1]] % 2 === 0) {
            sumEven -= A[query[1]];    
        }
        
        A[query[1]] += query[0];
        
        if (A[query[1]] % 2 === 0) {
            sumEven += A[query[1]];
        }
        
        res.push(sumEven);
    }
    
    return res;
};