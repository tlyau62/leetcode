/**
 * just check existance on each row of keyword
 * time: O(n * k)
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const res = [];
    const rows = [
        'qwertyuiop', 'asdfghjkl', 'zxcvbnm'
    ];
    const rows_map = rows.map(row => {
        const map = new Map();
        for (const r of row.split('')) {
            map.set(r, true);
        }
        return map;
    });
    
    let cur_contain;
    for (const w of words) {
        for (const map of rows_map) {
            cur_contain = true;
            for (const c of w.toLowerCase()) {
                if (!map.has(c)) {
                    cur_contain = false;
                    break;
                }
            }
            if (cur_contain) {
                res.push(w);    
                break;
            }
        }
    }
    
    return res;
};