/**
 * How to use exceptions?
 * - effects section must defined what causes the procedure to terminate with each exception, and
 *   what is its behavior is in each case
 * - if a procedure signals an exception for a certain subset of arguments, that subsets should not
 *   be excluded in the requires clause
 */
function search(a, x) {
    // Requires: a is sorted
    // Effects: if a is null, throws NullPointerException;
    //    else if x is not in a, throws NotFoundException;
    //    else returns i such that a[i] = x.
}

 function fact(n) {
    // Effects: if n is negative, then throws NegativeException, else
    //    returns the factorial of n
}

/**
 * jsdoc
 * Calculate the factorial of a number
 * @param {number} n 
 * @returns {number} factorial of n
 * @throws {NegativeException} Parameter n must be non-negative (requires + effects)
 */
function fact(n) {
    if (n < 0) {
        throw new NegativeException();
    }
}

/**
 * jsdoc
 * Search an element within an array in ascending order
 * @param {number[]} a an array in ascending order (requires)
 * @param {number} x
 * @throws {NullPointerException} Parameter a must be non-null (requires + effects)
 * @throws {NotFoundException} Parameter x must be within a (requires + effects)
 */
function search(a, x) {
    // no checking on whether a is sorted => add this constraint to param description
    if (!a) {
        throw new NullPointerException();
    } else if (!a.includes(x)) {
        throw new NotFoundException();
    }
}