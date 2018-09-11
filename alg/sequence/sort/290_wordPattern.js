/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
// time O(n lg n), easy impl
var wordPattern = function (pattern, str) {
    let map = str.split(' ');

    if (pattern.length !== map.length) {
        return false;
    }

    map = map.map((s, i) => {
        return {
            pat: pattern[i],
            str: s
        };
    }).sort((a, b) => a.pat > b.pat);

    for (let i = 0; i < map.length - 1; i++) {
        if ((map[i].pat === map[i + 1].pat && map[i].str !== map[i + 1].str)
            || (map[i].pat !== map[i + 1].pat && map[i].str === map[i + 1].str)) {
            return false;
        }
    }

    return true;
};