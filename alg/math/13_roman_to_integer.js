/**
 * problem: https://leetcode.com/problems/roman-to-integer/description/
 * 
 * mind flow:
 * 1. do the general suming digit, then reduce the sum according to the 3 rules
 * 
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map();
    const syms = ['I', 1, 'V', 5, 'X', 10, 'L', 50, 'C', 100, 'D', 500, 'M', 1000];
    let sum, prev, cur;

    // init
    for (let i = 0; i < syms.length; i += 2) {
        map.set(syms[i], syms[i + 1]);
    }
    sum = s.split('').reduce((a, e) => a + map.get(e), 0);
    
    // main
    for (let i = 1; i < s.length; i++) {
        prev = s[i - 1];
        cur = s[i];
        
        if (prev === 'I' && (cur === 'V' || cur === 'X') // rule 1
           || prev === 'X' && (cur === 'L' || cur === 'C') // rule 2
           || prev === 'C' && (cur === 'D' || cur === 'M')) { // rule 3
            sum -= 2 * map.get(prev);   
        }
    }
    
    return sum;
};