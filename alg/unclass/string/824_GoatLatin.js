/**
 * https://leetcode.com/problems/goat-latin/description/
 * 
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    S = S.split(' ');
    for (let i = 0; i < S.length; i++) {
        if (isConsonant(S[i][0])) {
            S[i] = S[i].slice(1) + S[i][0];
        }
        S[i] += 'ma'; 
        for (let j = 0; j <= i; j++) {
            S[i] += 'a';
        }
    }
    return S.join(' ');
    
    function isConsonant(c) {
        const vowels = 'a,e,i,o,u'.split(',');
        c = c.toLowerCase();
        for (const v of vowels) {
            if (c === v) {
                return false;
            }
        }
        return true;
    }
};