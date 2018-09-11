/**
 * O(n lg n)
 * 
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
    const S_map = new Map();
    for (let i = 0; i < S.length; i++) {
        S_map.set(S[i], i);
    }
    return T.split('')
        .sort((a, b) => {
            const a_val = S_map.get(a);
            const b_val = S_map.get(b);

            if (a_val === undefined) { // treat a is infinite
                return 1;
            } else if (b_val === undefined) {  // treat b is infinite
                return -1
            } else if (a_val < b_val) {
                return -1;
            } else if (a_val > b_val) {
                return 1
            }
            return 0;
        })
        .join('');
};