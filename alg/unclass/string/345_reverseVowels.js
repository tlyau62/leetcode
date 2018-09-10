// time: O(n)
// can be optimize with 1 pass with 2 pointers
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vows = [];

    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            vows.push(i);
        }
    }

    const half = Math.floor(vows.length / 2);
    let temp;
    for (let i = 0, j; i < half; i++) {
        j = vows.length - i - 1;

        // swap
        temp = s[vows[i]];
        s[vows[i]] = s[vows[j]];
        s[vows[j]] = temp;
    }

    return s.join('');

    function isVowel(c) {
        c = c.toLowerCase();
        return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
    }
};