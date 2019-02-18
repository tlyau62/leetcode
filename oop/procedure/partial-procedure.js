/**
 * Partial procedure
 * - a procedure which its behavior is NOT specified for all legal inputs
 * - spec of a partial procedure always contains a requires clause
 * - less safe than total
 *   - use when the context of use is limited (not in library), or
 *   - enable substantial benefits, such as better performance
 */

/**
 * @param {number[]} a sorted array in ascending order
 * @param {number} x the target
 */
function binarySearch(a, x) {
    // when a is not sorted, the behavior is unknow
    // check a is sorted needs O(n) time, very slow => no need to check (partial)
}