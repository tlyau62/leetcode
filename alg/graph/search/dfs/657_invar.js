/**
 * invariant for position always at (0,0) : sumX === sumY === 0
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let sumX, sumY;
    sumX = sumY = 0;
    
    moves.split('').forEach(move => {
        if (move === 'U') {
            sumX++;
        } else if (move === 'D') {
            sumX--;
        } else if (move === 'L') {
            sumY++;
        } else if (move === 'R') {
            sumY--;
        } else {
            return null;
        }
    });
    
    return sumX === 0 && sumY === 0;
    
};