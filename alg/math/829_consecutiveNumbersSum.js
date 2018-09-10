/**
 * prob:
 * https://leetcode.com/problems/consecutive-numbers-sum/description/
 *
 * mind flow:
 * 1. 1st try: divide-conquer
 * - not quite work, 9 => 4 + 5 => 2 + 2 + 2 + 3 (wrong)
 * 2. if N is an odd number, we know the answer is ganrantee to be >= 2
 * - res = {N, N / 2 + (N / 2) + 1, ...}
 * 3. how about the average among the numbers? 
 * - avg(15) = 15, avg(7, 8) = 7.5, ...
 * - may be a solution: use the avg number to get back the sequence?
 * - any formular helps to do so?
 * - for 2 terms: (n + (n + 1)) / 2 = N / 2,
 *   for 3 terms: (n + (n + 1) + (n + 2)) / 3 = N / 3,
 *   for n terms: nX + m = N (invariant),
        where n = 1, 2, 3, ...;
              m = arithmetic sum = (1 + n) * n / 2;
              m < N
 * 4. solved, how about the time?
 * - n is actually the max loop count
 * - so, m = (1 + n) * n / 2 ~ n^2
 * - m < N => n^2 < N => n < sqrt(N) => O(sqrt(N))
 *
 */

/**
 * @param {number} N
 * @return {number}
 */

// O(sqrt(N))
var consecutiveNumbersSum = function (N) {
    let a, b, temp, counter;

    a = 1;
    b = 0;
    counter = 0;
    temp = 1;

    while (true) {
        temp = N - b;

        if (temp > 0) {
            if (temp % a === 0) {
                counter++;
            }
            b += a;
            a++;
        } else {
            break;
        }
    }

    return counter;
};