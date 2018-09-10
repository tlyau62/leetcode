/**
 * @param {number} n
 * @return {boolean}
 */
// unhappy number must fall into a loop => never getting into 1
// proved that this loop has max of length 7: 4 -> .. -> 42 -> 20 -> 4 -> ...
// hash => record for checking loop
// sum square digits

var isHappy = function (n) {

    if (n <= 0) {
        return false;
    }


    const map = new Map();
    let sum = n;

    while (sum !== 1) {
        if (!map.has(sum)) {
            map.set(sum);
        } else {
            return false;
        }
        sum = sumSquare(sum);
    }

    return true;

    function sumSquare(n) {
        let sum = 0;
        let digit;
        while (n > 0) {
            digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }
        return sum;
    }
};