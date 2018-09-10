// https://zh.wikipedia.org/wiki/H%E6%8C%87%E6%95%B0
// after thought: https://leetcode.com/problems/h-index/discuss/70867/If-we-really-come-across-this-question-in-interview-sort-is-allowed-or-not
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations = citations.sort((a, b) => b - a);

    // i: number of papers each with citations >= i
    for (let h = 1; h <= citations.length; h++) {
        if (citations[h - 1] < h) {
            return h - 1;
        }
    }
    return citations.length;
};