/**
 * - identify the true problems
 *   - token between dash but not '.', repeated dash
 * - use stack for '..'
 * 
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const tokens = path.split('/').filter(t => t.length > 0 && t !== '.');
    const stack = [];

    for (let tok of tokens) {
        if (tok === '..') {
            stack.pop();
        } else {
            stack.push(tok);
        }
    }

    return '/' + stack.join('/');
};