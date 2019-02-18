/**
 * Total procedure
 * - a procedure which its behavior is specified for all legal inputs
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