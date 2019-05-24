/**
 * problem: https://leetcode.com/problems/complex-number-multiplication/
 * 
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
    const reg = /^(-?\d+)\+(-?\d+)i$/;

    a = parse(a);
    b = parse(b);

    return `${a[0] * b[0] + a[1] * b[1] * -1}+${a[0] * b[1] + a[1] * b[0]}i`;

    function parse(str) {
        const mat = str.match(reg);

        return [parseInt(mat[1]), parseInt(mat[2])];
    }
};