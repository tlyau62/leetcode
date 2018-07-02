/**
 * complete search
 * use sort on J and S to reduce time complexity
 * 
 * note:
 * - J are guaranteed distinct
 *
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    if (J.length === 0) {
        return 0;
    }

    J = J.split('').sort();
    S = S.split('').sort().filter(s => s >= J[0]);
    return solve(J, S);
};

function solve(J, S) {

    let count = 0, j_idx = 0;
    for (const [i, s] of S.entries()) {

        if (s === J[j_idx]) {
            count++;
        } else if (s > J[j_idx]) {

            // found a J less than or equal to s
            while (j_idx < J.length && s > J[++j_idx]) { }
            
            if (s === J[j_idx]) {
                count++;
            }
        }

    }

    return count;
}

let result;
// result = numJewelsInStones("atz", "abcstuz");
// console.log(result);

result = numJewelsInStones("bce", "eea");
console.log(result);