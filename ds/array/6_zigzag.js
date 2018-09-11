/**
 * just a few of stacks
 * 
 * notes
 * - case when numRows = 1
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let res = [];
    let dir = -1;

    for (let i = 0; i < numRows; i++) {
        res.push([]);
    }

    for (let i = 0, j = 0; j < s.length; i += dir, j++) {
        res[i].push(s[j]);

        if (numRows - 1 === 0) {
            dir = 0;
        } else if (i % (numRows - 1) === 0) {
            dir *= -1;
        }
    }

    let result = '';
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res[i].length; j++) {
            result += res[i][j];
        }
    }

    return result;
};

function verify(input, target) {
    console.log(input + ' ' + (input === target));
}

verify(convert('', 3), '');
verify(convert('a', 3), 'a');
verify(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
verify(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI');
verify(convert('PAYPALISHIRING', 100), 'PAYPALISHIRING');
verify(convert('123456789', 4), '172683594');
verify(convert('ABCDEFG', 1), 'ABCDEFG');