/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {

    if (num1.length < num2.length) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();

    const intTable = new Map();
    for (let i = 48; i < 58; i++) {
        intTable.set(String.fromCharCode(i), i - 48);
    }

    const res = [];
    let carry, sum;

    carry = 0;
    for (let i = 0; i < num1.length; i++) {
        if (i < num2.length) {
            sum = carry + intTable.get(num1[i]) + intTable.get(num2[i]);
        } else {
            sum = carry + intTable.get(num1[i]);
        }
        carry = Math.floor(sum / 10);
        sum %= 10;
        res.push(sum);
    }
    if (carry > 0) {
        res.push(1);
    }

    return res.reverse().join('');
};