/**
 * Abstraction by specification
 * - abstract from the implementation details (how the module is implemented)
 *   to the behavior users can depend on (what the module does)
 */
function sqrt(coef) {
    // Requires: coef >= 0
    // Effects: Returns an approxmiation to the square root of coef

    let ans = coef / 2;
    let i = 1;

    while (i < 7) {
        ans = ans - ((ans * ans - coef) / (2 * ans));
        i++;
    }

    return ans;
}

function distance(pt1, pt2) {
    let diffX, diffY, sqr;

    diffX = pt1.x - pt2.x;
    diffY = pt1.y - pt2.y;
    sqr = diffX * diffX + diffY * diffY;

    // using requires
    if (sqr < 0) {
        throw new Error('sqr is negative');
    }

    return sqrt(diffX * diffX + diffY * diffY); // using effect
}