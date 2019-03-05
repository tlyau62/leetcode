/**
 * reference:
 * - [https://introcs.cs.princeton.edu/java/99crypto/ExtendedEuclid.java.html]
 * - [http://www-math.ucdenver.edu/~wcherowi/courses/m5410/exeucalg.html]
 * 
 * return array [d, a, b] such that d = gcd(p, q), ap + bq = d
 */
(function () {
    function gcd(p, q) {
        if (q == 0) {
            console.log(`1 * ${p} + 0 * ${q} = ${p}`);
            return [p, 1, 0];
        }

        let vals = gcd(q, p % q);
        let d = vals[0],
            a = vals[2],
            b = vals[1] - Math.floor(p / q) * vals[2]; // d = pq + r

        console.log(`${a} * ${p} + ${b} * ${q} = ${d}`); // we know p, q, d => find a, b
        return [d, a, b];
    }

    let p = 3, q = 5;
    let vals = gcd(p, q);

    console.log("gcd(" + p + ", " + q + ") = " + vals[0]);
    console.log(vals[1] + "(" + p + ") + " + vals[2] + "(" + q + ") = " + vals[0]);
})();

/**
 * Mod from above alg
 * 
 * 81 and 57
 * euclidean alg:
 * gcd(81, 57) = gcd(57, 24)
 *             = gcd(24, 9)
 *             = gcd(9, 6)
 *             = gcd(6, 3)
 *             = gcd(3, 0)
 * 
 * extended euclidean alg:
 * 3 = 1 * 3 + 0 * 0 [a = 1, b = 0]
 *   = 0 * 6 + 1 * 3  [a = 0, b = (3 - 0 * 6) / 3 = 1]
 *   = 1 * 9 + -1 * 6 [a = 1, b = (3 - 1 * 9) / 6 = -1]
 *   = -1 * 24 + 3 * 9 [a = -1, b = (3 + 1 * 24) / 9 = 3] 
 *   = 3 * 57 + -7 * 24 [a = 3, b = (3 - 3 * 57) / 24 = -7]
 * 
 * notes:
 * - 3, 6, 9, 24 are remainder
 * - 3 | (3 - 0 * 6), 6 | (3 - 1 * 9), 9 | (3 + 1 * 24), 24 | (3 - 3 * 57)
 */
(function () {
    function gcd(p, q) {
        if (q == 0) {
            console.log(`1 * ${p} + 0 * ${q} = ${p}`);
            return [p, 1, 0];
        }

        let vals = gcd(q, p % q);
        let d = vals[0],
            a = vals[2],
            b = (d - a * p) / q;

        console.log(`${a} * ${p} + ${b} * ${q} = ${d}`); // we know p, q, d => find a, b
        return [d, a, b];
    }

    gcd(81, 57);
})();




