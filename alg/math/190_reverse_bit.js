/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const bin = new Array(32).fill(0);
    let i = 0;
    while (n > 0) {
        bin[i++] = n % 2;
        n = Math.floor(n / 2);
    }
    return parseInt(bin.join(''), 2);
};

console.log(reverseBits(43261596));
console.log(reverseBits(2));
console.log(reverseBits(12498));
console.log(reverseBits(4294967295));