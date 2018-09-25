/**
 * @param {number} num
 * @return {number}
 */
// O(n), beat 100%
var findComplement = function(num) {
    let mask = 1;
    
    while (mask < num) {
        mask = (mask << 1) | 1; // or (mask << 1) + 1
        // console.log(mask);
    }
    
    return ~num & mask;
};