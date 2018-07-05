/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    
    if (A.length !== B.length) {
        return false;
    }
    
    const map = new Map();
    
    // hash
    for (let i = 0; i < A.length; i++) {
        if (!map.has(A[i])) {
            map.set(A[i], i);
        }
    }
    
    B = Array.from(B);

    let swapCount = 0;
    for (let i = 0; i < B.length; i++) {
        if (swapCount > 1) {
            return false;
        }
        
        if (A[i] !== B[i]) {
            swapCount++;
            if (!map.has(B[i])) {
                return false;
            } else {
                B[map.get(B[i])] = B[i];   
            }
        }
    }
        
    return swapCount;
};

let result;
result = buddyStrings("ab", "ba");
console.log(result);