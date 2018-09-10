/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
// O(n)
var shiftingLetters = function(S, shifts) {
    
    // sum shifts
    for (let i = shifts.length - 1; i >= 1; i--) {
        shifts[i - 1] += shifts[i];
    }
    
    // shift letter
    for (let i = 0; i < shifts.length; i++) {
        shifts[i] = String.fromCharCode(97 + (S[i].charCodeAt() - 97 + shifts[i]) % 26);
    }
    
    return shifts.join('');
    
};