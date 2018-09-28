/**
 * @param {number} n
 * @return {boolean}
 */

// mind flow 4:
// 1. list out all the solution => find a pattern
//    if n is a multiple of 4, then lose
var canWinNim = function (n) {
    return n % 4 !== 0;
};

// mind flow 3:
// 5. try with bitwise, but go TLE again
// 6. time must be < O(n)
var canWinNim4 = function (n) {

    if (n === 0) {
        return false;
    }

    let mem = 7;

    for (let i = 4; i <= n; i++) {
        cur = (mem & 1) & ((mem & 2) >> 1) & ((mem & 4) >> 2);
        mem = (mem << 1 | !cur) & 7;
        // console.log(mem.toString(2));
    }

    return !!(mem & 1);
};

// mind flow 2:
// 3. reduce the size of mem to constant 3
// 4. but got TLE
var canWinNim3 = function (n) {

    const mem = new Map();

    for (const [i, v] of [false, true, true, true].entries()) {
        mem.set(i, v);
    }

    for (let i = 4; i <= n; i++) {
        mem.set(i, false);
        for (let j = 1; j <= 3; j++) {
            if (mem.get(i - j) === false) {
                // takes i stones, if any path causes the opponent to lose => I win
                mem.set(i, true);
            }
        }
        mem.delete(i - 3);
    }

    // console.log(mem.size);

    // console.log(mem);

    return mem.get(n);
};

// mind flow:
// 1. similar to coin exchange problem => O(n)
// 2. but got MLE
var canWinNim2 = function (n) {
    const mem = [false, true, true, true]; // sub-problem: number of stones

    for (let i = 4; i <= n; i++) {
        mem[i] = false;
        for (let j = 1; j <= 3; j++) {
            if (mem[i - j] === false) {
                // takes i stones, if any path causes the opponent to lose => I win
                mem[i] = true;
            }
        }
    }

    // console.log(mem);

    return mem[n];
};