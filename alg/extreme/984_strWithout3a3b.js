/**
 * problem: https://leetcode.com/submissions/detail/205871150/
 * 
 * main idea: start from simple case, then push it to extreme (see test case)
 * 
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function (A, B) {
    let res = '', diff, lar, sma, larChar, smaChar, suffix;

    lar = A;
    sma = B;
    larChar = 'a';
    smaChar = 'b';

    if (B > A) {
        [lar, sma] = [sma, lar];
        [larChar, smaChar] = [smaChar, larChar];
    }
    diff = lar - sma;
    suffix = larChar + larChar + smaChar;

    while (sma > 0 && diff >= 1) {
        res += suffix;
        lar -= 2;
        sma--;

        diff = lar - sma;
    }

    return res + (larChar + (sma === 0 ? '' : smaChar)).repeat(lar);
};
/**
 * A = 3, B = 3
 * ababab (method0)
 * 
 * A = 4, B = 3
 * aababab (method1: add to front)
 * 
 * A = 5, B = 3
 * aaababab => not work (method1)
 * aabababa (method2: add to front or back)
 *
 * A = 6, B = 3
 * aabababaa
 *
 * A = 7, B = 3
 * aaabababaa => not work (method2)
 * aabaabaaba (method3: gradually reduce the A's number until A = B, then use method0)
 *
 * A = 8, B = 3
 * aabaabaabaa
 *
 * A = 9, B = 3
 * aabaabaabaa(a) => not work (method3), but solution exists? no
 */