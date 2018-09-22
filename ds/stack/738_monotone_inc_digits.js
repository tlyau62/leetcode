/**
 * problem:
 * https://leetcode.com/problems/monotone-increasing-digits/description/
 * 
 * mind flow:
 * 1. example: 4 =>
 * 2. example: 54 => 49
 *    - 4 change to 9
 *    - 5 decrements by 1
 *    => draft algortihm with stack (start push from the rightmost digits)
 * 3. counter example: 711 => 691, not 699
 *    - 11 ok
 *    - 71 => 69, but the last digit 1 is not update
 *    => can be solved it by update all the later digits to 9 at once?
 * 4. time: O(n)
 * 
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
    const stack = [];
    let boundary;

    N = N.toString();

    stack.push(N[N.length - 1]);
    for (let i = N.length - 2; i >= 0; i--) {
        if (N[i] > top(stack)) {
            boundary = stack.length - 1;
            // stack[stack.length - 1] = 9; (all the subsequence digits will be 9, so update them later at once)
            stack.push(parseInt(N[i] - 1));
        } else {
            stack.push(parseInt(N[i]));
        }
    }

    // update all digits <= boundary to 9 at once
    for (let i = 0; i <= boundary; i++) {
        stack[i] = 9;
    }

    return parseInt(stack.reverse().join(''));

    function top(stack) {
        return stack[stack.length - 1];
    }

};