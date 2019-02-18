/**
 * When to use exceptions?
 * - use requires clause & special return values
 *   - when the context of use is local
 *      - because if the context of use is so limited,
 *        we can be sure the constraint is satisfied and return value is used properly, or
 *   - when checking is very expensive / cannot be checked
 * - else use exceptions to eliminate contraints listed in requires clause
 */

/**
 * Calculate the product of the list.
 * Assume this function is public.
 * @param {number[]} numbers array of number (expensive checking => requires clause)
 */
function productList(numbers) {
    return numbers.reduce((a, e) => {
        let prod = product(a * e);

        return prod === -1 ? 1 : prod;
    });

    // require: a, b are non-negative numbers (context of use is local => requires clause + special return values)
    function product(a, b) {
        if (a < 0 || b < 0) {
            return -1;
        }
        return a * b;
    }
}