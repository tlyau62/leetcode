/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    if (s.length === 1) {
        return 0;
    }
    
    let sum = 0;
    for (let i = 0; i < s.length - 1; i++) {
        sum += expand(s, i, i + 1, 0);   
    }
    return sum;
};

function expand(s, i, j, count) {
    if (count > 0 && s[i] !== s[i + 1] && s[j] !== s[j - 1]) { // left new char === left char and right new char === right char ?
        return count;
    } else if (!equals(s[i], s[j])) { // left char === 1 and right char === 0, vice versa
        return count;
    }

    count++;
    if (i - 1 >= 0 && j + 1 < s.length) { // can expand?
        count = expand(s, i - 1, j + 1, count);
    }
    
    return count;
}
        
function equals(n, m) {
    return (n === '1' && m === '0') || (n === '0' && m === '1');
}