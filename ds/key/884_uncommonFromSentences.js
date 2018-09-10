/**
 * prob: https://leetcode.com/problems/uncommon-words-from-two-sentences/description/
 * 
 * simple hash table
 * 
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const map = new Map();
    let t, toMap;
    
    toMap = (el) => {        
        t = map.get(el);
        if (!t) {
            map.set(el, 1);
        } else {
            map.set(el, t + 1);
        }
    };
        
    A.length > 0 && A.split(' ').forEach(toMap);
    B.length > 0 && B.split(' ').forEach(toMap);
    
    const res = [];
    for (const [key, el] of map.entries()) {
        if (el === 1) {
            res.push(key);
        }
    }
    
    return res;
};