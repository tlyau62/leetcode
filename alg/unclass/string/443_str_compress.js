/**
 * NOT Huffman Coding compression
 * 
 * O(n + k), k = max count string length
 * => worst case (all char are same)
 * => O(n) scan + O(k) write count string
 * => best case (all char are distinct)
 * => O(n) scan
 * 
 * beat 100%
 * 
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let count, countStr, i, j, k;
    
    count = 1;
    j = 0;
    for (i = 1; i <= chars.length; i++) {
        if (chars[i] === chars[i - 1]) {
            count++;
        } else {
            chars[j++] = chars[i - 1];
            if (count > 1) {
                countStr = count.toString();
                for (k = 0; k < countStr.length; k++) {
                    chars[j++] = countStr[k];
                }
            }
            count = 1;
        }
    }
    
    return j;
};

// test case
// ["a","a","b","b","c","c","c"]
// ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// ["a"]
// []
// ["b","c","b"]
// ["b","b","c","c","b"]