/**
 * Euclidean Algorithm
 * - find gcd, where a, b > 0
 * - gcd: the largest number that divides both of them without leaving a remainder
 * - principle:
 *   1. gcd(a, b) = gcd(b, a)
 *   2. gcd(a, b) = a, if a > 0 and a | b
 *   3. gcd(a, b) = gcd(c, b), if a = c (mod b)
 *      - how to satisfy a = c (mod b)?
 *      - if c is a, then a % b = a % b => not reduce any problem size
 *      - if c is a % b, then a % b = (a % b) % b => reduce the problem size
 *      - gcd(a, b) = gcd(b, a % b)
 * 
 * prove:   
 * - [https://www.whitman.edu/mathematics/higher_math_online/section03.03.html]
 */
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}