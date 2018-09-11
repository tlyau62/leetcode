/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const freqMap = new Map();

    let mapEntry;
    for (const c of s) {
        mapEntry = freqMap.get(c);
        if (mapEntry === undefined) {
            freqMap.set(c, 1);
        } else {
            freqMap.set(c, mapEntry + 1);
        }
    }

    return s.split('')
        .sort((a, b) => {
            return freqMap.get(b) - freqMap.get(a) || a.charCodeAt(0) - b.charCodeAt(0);
        })
        .join('');
};