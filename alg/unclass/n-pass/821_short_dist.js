/** 
 * scan twice from left to right, then right to left
 * 
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let dist = [];
    
    for (let i = 0, j = null; i < S.length; i++) {
        if (S[i] === C) {
            j = 0;
            dist[i] = 0;
        } else if (j !== null) {
            dist[i] = ++j;   
        }
    }
    
    for (let i = S.length - 1, j = null; i >= 0; i--) {
        if (S[i] === C) {
            j = 0;
        } else if (j !== null) {
            if (!dist[i]) {
                dist[i] = ++j;       
            } else {
                dist[i] = Math.min(dist[i], ++j);       
            }
        }
    }
    
   
    return dist;
};