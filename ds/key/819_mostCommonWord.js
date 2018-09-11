/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    const words = paragraph.split(/[!?',;. ]/g)
        .filter(s => s.length > 0)
        .map(s => s.toLowerCase());
    const map = new Map();

    for (let i = 0; i < banned.length; i++) {
        map.set(banned[i], -1);
    }

    let wordCount;
    let maxCount, maxWord;

    maxCount = 0;
    maxWord = null;

    for (let i = 0; i < words.length; i++) {
        wordCount = map.get(words[i]);
        if (wordCount > 0) {
            map.set(words[i], ++wordCount);
            if (wordCount > maxCount) {
                maxCount = wordCount;
                maxWord = words[i];
            }
        } else if (wordCount === undefined) {
            map.set(words[i], 1);
            if (maxWord === null) {
                maxCount = 1;
                maxWord = words[i];
            }
        }
    }

    return maxWord;
};