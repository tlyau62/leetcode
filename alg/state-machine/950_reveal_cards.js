/**
 * problem: https://leetcode.com/problems/reveal-cards-in-increasing-order/description/
 * 
 * mind flow:
 * 1. observe the pattern until you find out
 *    - assign current card to the next next empty slot
 * 
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    const result = [];
    let state, deck_i, res_i;

    state = 0;
    res_i = deck_i = 0;
    deck = deck.sort((a, b) => a - b);

    while (deck_i < deck.length) {
        if (state === 0 && result[res_i] === undefined) {
            result[res_i] = deck[deck_i];
            deck_i++;
            state = 1;
        } else if (state === 1 && result[res_i] === undefined) {
            state = 0;
        }
        res_i = (res_i + 1) % deck.length;
    }

    return result;
};

const result = deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]);
console.log(result);