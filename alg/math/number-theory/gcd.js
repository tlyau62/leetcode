/**
 * Euclidean Algorithm
 * - find gcd, where a, b > 0
 * - gcd: the largest number that divides both of them without leaving a remainder
 * - principle:
 *   1. gcd(a, a) = a
 *   2. gcd(a, b) = gcd(a - b, b), if a > b
 *   3. gcd(a, b) = gcd(a, b - a), if b > a
 * 
 * Prove 1:
 * - The greatest divisor of 2 identical numbers is itself
 * 
 * Prove 2: d|a and d|b <-> d|a-b and d|b, if a > b
 * 1. prove: if d|a and d|b, then d|a-b  
 *      a = dq
 *      b = dr  
 *      a - b = dq - dr
 *            = d(q - r)   [d|a - b]
 * 2. prove: if d|a-b and d|b, then d|a and d|b
 *      b = dq
 *      a - b = qr
 *      a - b + b = dq + qr
 *              a = d(q + r) [d|a]
 * 3. the common divisors of a and b are exactly the common divisors of a - b and b,
 *    so, in particular, they have the same greatest common divisor.
 * 
 * ref:
 * 1. prove helper [https://www.whitman.edu/mathematics/higher_math_online/section03.03.html]
 */
function gcd(a, b) {
    if (a === b) {
        return a;
    } else if (a > b) {
        return gcd(a - b, b);
    } else {
        return gcd(a, b - a);
    }
}
