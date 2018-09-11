/**
 * @param {string} str
 * @return {string}
 */
const charMap = new Map();

for (let i = 0; i < 26; i++) {
    charMap.set(String.fromCharCode(65 + i), String.fromCharCode(97 + i));
}

var toLowerCase = function (str) {
    const lowercase = [];

    for (const c of str) {
        lowercase.push(charMap.get(c) || c);
    }

    return lowercase.join('');
};