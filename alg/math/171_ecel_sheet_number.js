// problem:
// https://leetcode.com/problems/excel-sheet-column-number/description/
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let sum = 0, exp = 1;
    
    for (let i = s.length - 1; i >= 0; i--) {
        // treat add 1 dummy symbol # for the 26 number system
        // key 0: # => #, A, B, C, ... => 0, 1, 2, 3, ...
        sum += (s.charCodeAt(i) - 64) * exp; 
        exp *= 26;
    }
    
    return sum;
};