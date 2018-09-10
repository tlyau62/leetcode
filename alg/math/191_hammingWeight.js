/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    const numBits = n.toString(2);
    let count = 0;
    for (let i = 0; i < numBits.length; i++) {
        if (numBits[i] === '1') {
            count++;
        }
    }
    return count;
};

// console.log(hammingWeight(0));
// console.log(hammingWeight(1));
// console.log(hammingWeight(2));
// console.log(hammingWeight(3));
// console.log(hammingWeight(128));
// console.log(hammingWeight(512));
// console.log(hammingWeight(123456789));
console.log(hammingWeight(2147483648));
