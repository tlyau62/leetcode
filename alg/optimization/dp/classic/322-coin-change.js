/**
 * guess: bf, greedy, dp
 *
 * greedy not work
 * - counter example [1, 3, 5, 6, 7], amount 9
 *   - found: [7, 1, 1], correct: [6, 3]
 *
 * 1st try dp: O(m^2), m = amount; accepted
 * 2nd try dp: O(nm), n = number of coins, m = amount
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// 2nd try dp: time O(nm) / space O(m)
// - divide current amount c to exactly n subprob: c - 1st coin, c - 2nd coin, ...
// - min coin at c = 1 + min({min coin at c - coin[1], min coin at c - coin[2], ...})
// - 1 is the cost on selecting current coin
// e.g. coins = [1, 2, 5]
// before arriving min coin amount at 6, you must arrive 1 of the following path
// - {arrived min coin at amount 5 and select current coin 1, 
//    arrived min coin at amount 4 and select current coin 2,
//    arrived min coin at amount 1 and select current coin 5}
// - thus, min coin amount at 6 = min{1 + path1, 1 + path2, 1 + path3} = 
//                              = 1 +min{1 + path1, 1 + path2, 1 + path3}
var coinChange = function (coins, amount) {
    const mem = [0];

    for (let i = 1; i <= amount; i++) {
        mem[i] = Infinity;
    }

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {

            if (coins[j] > i) {
                // this coin value is too large, skip    
                continue;
            }

            mem[i] = Math.min(mem[i], 1 + mem[i - coins[j]]);
        }
    }

    return mem[amount] === Infinity ? -1 : mem[amount];
};


// 1st try dp: time O(m^2) / space O(m)
// - divide current amount c to {{a, b}}, where c = a + b
// - min coin at c = min({min coin at a + min coin at b})
// example: coins = [1, 2, 5], amount = 11
// amount min coin
// 1	  1
// 2	  1
// 3	  2
// 4	  2
// 5	  1
// 6	  2
// 7	  2
// 8	  3
// 9	  3
// 10	  2
// 11	  3 (ans)

var coinChange_1st = function (coins, amount) {

    if (amount === 0) {
        return 0;
    }

    const mem = [];

    for (let i = 0; i <= amount; i++) {
        mem[i] = Infinity;
    }

    for (const c of coins) {
        mem[c] = 1;
    }

    let min, mid;
    for (let i = 1; i <= amount; i++) {
        if (mem[i] === 1) {
            continue;
        }

        mid = ~~(i / 2);
        min = (i % 2) ? mem[mid] + mem[mid + 1] : mem[mid] * 2;
        for (let j = mid - 1; j >= 1; j--) {
            min = Math.min(min, mem[j] + mem[i - j]);
        }
        mem[i] = min;
    }

    return mem[amount] === Infinity ? -1 : mem[amount];

};