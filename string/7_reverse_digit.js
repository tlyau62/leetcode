/**
 * make sure over returns 0
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let str = x.toString();
    const isNeg = str[0] === '-';

    if (isNeg) {
        str = str.substring(1, str.length);
    }
    str = (isNeg ? '-' : '') + str.split('').reverse().join('');

    const result = parseInt(str);

    if (result < -2147483648 || result > 2147483647) {
        return 0;
    }
    
    return result;
};

function verify(input, target) {
    console.log(input + ' ' + (input === target));
}

verify(reverse(12300), 321);
verify(reverse(123), 321);
verify(reverse(-123), -321);
verify(reverse(120), 21);
verify(reverse(12300), 321);
verify(reverse(0), 0);
verify(reverse(11), 11);
verify(reverse(-11), -11);
verify(reverse(-4294967296), 0);