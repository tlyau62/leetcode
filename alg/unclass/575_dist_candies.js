// https://leetcode.com/problems/distribute-candies/description/
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const half = candies.length / 2;
    let sis, bro;
    
    // sis get all distinct candies first 
    sis = new Set(candies).size;
    
    if (sis > half) {
        // sis gives back some candies to bro
        sis = half;
    } else {
        // bro gives the repeat kind candies to sis
    }
    
    return sis;
};