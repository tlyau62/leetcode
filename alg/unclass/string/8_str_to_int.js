/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let result = parseInt(str.trim());

    // some invalid case
    if (isNaN(result)) {
        return 0;
    } else if (result < -2147483648) {
        return -2147483648
    } else if (result > 2147483647) {
        return 2147483647
    }

    return result;
};

function verify(input, target) {
    console.log(input + ' ' + (input === target));
}

verify(myAtoi('42'), 42);
verify(myAtoi('   -42'), -42);
verify(myAtoi('4193 with words'), 4193);
verify(myAtoi('words and 987'), 0);
verify(myAtoi('-91283472332'), -2147483648);
verify(myAtoi('00124912412'), 124912412);
verify(myAtoi('000872'), 872);
verify(myAtoi('000872100'), 872100);