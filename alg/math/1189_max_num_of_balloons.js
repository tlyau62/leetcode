/**
 * problem: https://leetcode.com/problems/maximum-number-of-balloons/
 * 
 * 1. understand the problem
 * - find the max no. of word 'ballon' can be formed from a given text
 * - each char in text can be used once only
 * 
 * 2. understand the problem
 * - unknown: max no. of word 'ballon'
 * - known: a given text
 * 
 * 3. useful ideas
 * - hash table on words 'ballon'
 * 
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    const map = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0
    };

    for (const c of text) {
        c in map && map[c]++;
    }

    with (map) {
        return Math.min(b, a, ~~(l / 2), ~~(o / 2), n);
    }
};