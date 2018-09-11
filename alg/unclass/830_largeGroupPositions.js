/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {

    const res = [];
    let start, window;

    S = `^${S}$`;
    
    for (let i = 1; i < S.length; i++) {
        if (S[i] !==S[i - 1]) {
            if (window >= 3) {
                res.push([start - 1, i - 2]); // index start from 1
            }
            window = 1;
            start = i;
        } else {
            window++;
        }
    }
    
    return res;
};