/**
 * memorization, similar to alg: Sieve of Eratosthenes, remove mirror case by sqrt(num)
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num <= 1) {
        return false;
    }

    const mem = [];
    let sum = 1;
    let div;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (mem[i] === undefined) {
            if (num % i === 0) {
                div = num / i;
                mem[i] = div;
                mem[div] = i;
                sum += (i + div);
            } else {
                fill(mem, i);
            }
        } else {
            continue;
        }
    }
    return sum === num;

    function fill(mem, i) {
        let multi = 1, prod;
        while (prod <= num) {
            prod = i * multi++;
            mem[prod] = -1;
        }
    }
};

let result;
for (let i = 1; i < 9999; i++) {
    result = checkPerfectNumber(i);
    if (result) {
        console.log(i);
    }
}

// result = checkPerfectNumber(99999993);
// console.log(result);
// 28
// 0
// 1
// 6
// 28
// 496
// 495
// 8128
// 8129