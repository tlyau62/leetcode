// problem: https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
// be careful on -, / operations
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    let opd, opd1, opd2;
    
    for (const t of tokens) {
        if (t === '+') {
            opd = stack.pop() + stack.pop();
        } else if (t === '-') {
            opd1 = stack.pop();
            opd2 = stack.pop();
            opd = opd2 - opd1;
        } else if (t === '*') {
            opd = stack.pop() * stack.pop();
        } else if (t === '/') {
            opd1 = stack.pop();
            opd2 = stack.pop();
            opd = ~~(opd2 / opd1);
        } else {
            opd = parseInt(t);
        }
        
        stack.push(opd);
    }
    
    return stack.pop();
};