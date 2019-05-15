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

/**
 * Specification of a procedure
 * - consist of a header and description of the behavior
 * - header: procedure name, parameter list, return type, exceptions thrown if requires clause fails
 * - description: requires, modifies, effects
 */

function sqrt(coef) {
    // Requires: coef >= 0
    // Effects: Returns an approxmiation to the square root of coef
    // codes...
}

function sort(a) {
    // Modifies: a
    // Effects: Rearranges the elements of a into ascending order
    //  e.g. if a = [3, 1, 6, 1] before the call, on return a = [1, 1, 3, 6].
    // codes...
}

/** 
 * Rearranges the specified array into ascending order (jsdoc)
 * @example
 * // returns [1, 1, 3, 6]
 * // sort([3, 1, 6, 1]);
 * @param {number[]} a the array to be sorted
 */
function sort(a) {
    // codes...
}