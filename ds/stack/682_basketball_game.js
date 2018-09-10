// https://leetcode.com/problems/baseball-game/
/**
 * keyword: 'last' point => stack
 * 
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {

    const mem = [];

    for (const op of ops) {
        if (op === '+') {
            mem.push(mem[mem.length - 1] + mem[mem.length - 2]);
        } else if (op === 'D') {
            mem.push(2 * mem[mem.length - 1]);
        } else if (op === 'C') {
            mem.pop();
        } else {
            mem.push(parseInt(op));
        }
    }

    return mem.reduce((a, e) => a + e);

};