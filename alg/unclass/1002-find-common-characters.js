/**
 * problem: https://leetcode.com/problems/find-common-characters/
 * 
 * mind flow:
 * 1. compare the first letter to the rest is quite difficult
 * 2. so try to create a new dataset(chars) and compare the all letters, and see if it works or no
 * 
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    const res = [];
    const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let count;

    for (const char of chars) {
        count = Infinity;

        for (const a of A) {
            count = Math.min(count, countChar(a, char));
        }

        if (count > 0) {
            res.push(...char.repeat(count).split(''));
        }
    }

    return res;

    function countChar(a, c) {
        let count = 0;

        for (const ac of a) {
            if (ac === c) {
                count++;
            }
        }

        return count;
    }
};