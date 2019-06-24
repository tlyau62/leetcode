/**
 * problem: https://leetcode.com/problems/occurrences-after-bigram/
 * 
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    const res = [];

    text = text.split(' ');

    for (let i = 0, j = 1; j < text.length - 1; i++ , j++) {
        if (text[i] === first && text[j] === second) {
            res.push(text[j + 1]);
        }
    }

    return res;
};