/**
 * Total procedure
 * - a procedure is defined over the entire input domain
 * - should be used in library
 */

/**
 * Calculate the sum of 2 numbers
 * @param {number} a 
 * @param {number} b 
 * @returns {number} sum of a and b
 */
function sum(a, b) {
    if (!a || !b || typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('illegal arguments');
    }
    return a + b;
}