/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
// O(n)
var buddyStrings = function(A, B) {
    
    // check chars A is contains in B and vice versa O(n)
    const map = new Map();
    for (const a of A) {
        map.set(a, false);
    }
    for (const b of B) {
        if (!map.has(b)) {
            return false;
        } else {
            map.set(b, true);   
        }
    }
    for (const [k, v] of map.entries()) {
        if (v === false) {
            return false;
        }
    }

    // check can swap once O(n)
    let miss = 0;
    for (let i = 0; i < A.length && miss <= 2; i++) {
        if (A[i] !== B[i]) {
            miss++;
        }
    }
    
    if (miss === 2) {
        return true;
    } else if (miss === 0) {
        const freqMap = new Map();
        let temp;
        for (const a of A) {
            temp = freqMap.get(a);
            if (temp + 1 > 1) {
                return true;
            }
            if (temp === undefined) {
                freqMap.set(a, 1);
            } else {
                freqMap.set(a, temp + 1);
            }
        }
    }
    return false;
};