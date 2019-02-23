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