/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {    
    if (A.length !== B.length) {
        return false;
    }

    let temp;
    for (i = 0; i < A.length - 1; i++) {
        if (A === B) {
            return true;
        }
        
        temp = B[0];
        B = B.substr(1, B.length) + temp;
    }
    
    return false;
    
};

let result;
result = rotateString('','');
console.log(result);