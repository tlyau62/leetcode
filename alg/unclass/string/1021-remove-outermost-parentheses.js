/**
 * problem: https://leetcode.com/problems/remove-outermost-parentheses/
 * 
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    const res = [];
    let count = 0;
    
    for (const s of S) {
        if (s === '(') {
            if (count >= 1) {
                res.push(s);
            }
            count++;
        } else {
            if (count > 1) {
                res.push(s);
            }
            count--;
        }
    }
    
    return res.join('');
};