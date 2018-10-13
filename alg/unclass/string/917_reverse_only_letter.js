/**
 * problem: https://leetcode.com/problems/reverse-only-letters/description/
 * 
 * mind flow:
 * 1. two pointers
 * 
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let l, r, l_isLetter, r_isLetter;
    
    l = 0;
    r = S.length - 1;
    S = S.split('');
    
    while (l < r) {
        l_isLetter = isLetter(S[l]);
        r_isLetter = isLetter(S[r]);
        
        if (l_isLetter && r_isLetter) {
            swap(l, r);
            l++;
            r--;
        } else if (l_isLetter) {
            r--;
        } else if (r_isLetter) {
            l++;
        } else {
            l++;
            r--;
        }
    }
    
    return S.join('');
        
    function isLetter(char) {
        return /[a-zA-Z]/.test(char);
    }
    
    function swap(l, r) {
        const temp = S[l];
        S[l] = S[r];
        S[r] = temp;
    }
};