/**
 * problem + explan:
 * https://leetcode.com/problems/bulb-switcher/discuss/77104/Math-solution..
 * 
 * notes:
 * 1. how many square number from 1 to 100?
 * - sqrt(100) = 10
 * - why?
 *   - 1^2 = 1, 2^2 = 4, 10^2 = 100 (reach max)
 * 
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    return ~~Math.sqrt(n);
};