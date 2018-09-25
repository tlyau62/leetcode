// problem:
// https://leetcode.com/problems/number-of-lines-to-write-string/description/
/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
// time O(n); no O(1) => you cannot split a word
var numberOfLines = function (widths, S) {
    const line_max_width = 100;
    let lines_num, line_width, char_width;

    lines_num = S.length > 0 ? 1 : 0;
    line_width = 0;

    for (const s of S) {
        char_width = widths[s.charCodeAt(0) - 'a'.charCodeAt(0)];
        if (char_width + line_width <= line_max_width) {
            line_width += char_width;
        } else {
            lines_num++;
            line_width = char_width;
        }
    }

    return [lines_num, line_width];
};