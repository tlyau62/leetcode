/**
 * problem: https://leetcode.com/problems/verifying-an-alien-dictionary/description/
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    const map = buildMap(order);

    for (let w = 0; w < words.length - 1; w++) {
        if (!dfs(0, words[w], words[w + 1])) {
            return false;
        }
    }

    return true;

    function buildMap(order) {
        const map = new Map();
        let val = 0;

        map.set(undefined, val++);

        for (const c of order) {
            map.set(c, val++);
        }

        return map;
    }

    function dfs(i, w1, w2) {
        if (i >= w1.length && i >= w2.length) {
            // same word
            return true;
        }

        const v1 = map.get(w1[i]),
              v2 = map.get(w2[i]);

        if (v1 < v2) {
            return true;
        } else if (v1 === v2) {
            return dfs(i + 1, w1, w2); // can't determine, check next index
        } else {
            return false;
        }
    }

};