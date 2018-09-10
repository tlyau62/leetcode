/**
 * prob:
 * https://leetcode.com/problems/fair-candy-swap/description/
 * 
 * mind flow:
 * 1. from the examples, we can see that A, B after exchanges, both of them have the same size of candy
 * 2. this gives the final size f = the sum of total sizes / 2
 * 3. since guaranted ans is exist, so total sizes must be even number
 * 4. the problem is now reduced to substitude which 1 of the elements in A by 1 of the elements in B,
 *    which gives A has total size of f
 * 5. hash table => O(max(a,b)) time
 *
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    const sum = (a, e) => a + e;
    const a_sum = A.reduce(sum), b_sum = B.reduce(sum);
    const f = (a_sum + b_sum) / 2;
    const A_map = [];
       
    // hash A (optimized)
    for (const a of A) {
        A_map[a] = true;
    }
    
    // search B (optimized)
    const f_min_b = f - b_sum;
    for (const b of B) {
        let a = f_min_b + b;
        if (A_map[a] === true) {
            // if this a exists in A, return as answer
            return [a, b];
        }
    }
    
    // // search B
    // for (const b of B) {
    //     let a = f - (b_sum - b); // b_sum - b => sum of B without current b
    //     if (A_map[a] === true) {
    //         // if this a exists in A, return as answer
    //         return [a, b];
    //     }
    // }
};