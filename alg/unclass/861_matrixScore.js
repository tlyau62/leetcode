/**
 * @param {number[][]} A
 * @return {number}
 */
// beat 100%
// greedy: if flip current row/col increases local value, flip it
var matrixScore = function(A) {
    
    // row (choose msb)
    for (let i = 0; i < A.length; i++) {
        if (A[i][0] === 0) {
            flipH(i);
        }
    }
    
    // col (choose most number of ones)
    for (let i = 0; i < A[0].length; i++) {
        flipV(i);
    }
    
    // sum
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += parseInt(A[i].join(''), 2);
    }
    
    return sum;
    
    function flipH(r) {
        for (let i = 0; i < A[0].length; i++) {
            A[r][i] ^= 1;
        }
    }
    
    function flipV(c) {
        let zeros = 0;
        for (let i = 0; i < A.length; i++) {
            if (A[i][c] === 0) {
                zeros++;   
            }
        }
        
        if (zeros > A.length / 2) {
            for (let i = 0; i < A.length; i++) {
                A[i][c] ^= 1;
            }    
        }
    }
    
};