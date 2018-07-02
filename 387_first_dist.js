/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const map = new Map();
    let temp, c;

    for (let i = 0; i < s.length; i++) {
        c = s[i];
        temp = map.get(c);

        if (!temp) {
            map.set(c, [i, 1]);
        } else {
            temp[1]++;
            map.set(c, temp);
        }
    }

    for (const [k, v] of map.entries()) {
        if (v[1] === 1) {
            return v[0];
        }
    }

    return -1;
};

var firstUniqChar_slow = function (s) {
    const map = new Map();
    let temp;

    for (const [i, c] of Array.from(s).entries()) {
        if (!map.has(c)) {
            map.set(c, [i, 1]);
        } else {
            temp = map.get(c);
            temp[1]++;
            map.set(c, temp);
        }
    }

    for (const [k, v] of map.entries()) {
        if (v[1] === 1) {
            return v[0];
        }
    }

    return -1;
};

let result;
console.time('firstUniqChar');
result = firstUniqChar("leetcode");
console.timeEnd('firstUniqChar');

console.time('firstUniqChar');
result = firstUniqChar_slow("leetcode");
console.timeEnd('firstUniqChar');
