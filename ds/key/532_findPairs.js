/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    // absolute difference is k 
    if (k < 0) {
        return 0;
    }
    
    const map = new Map();
    for (const [i, n] of nums.entries()) {
        map.set(n - k, i);
    }
    
    let count = 0;
    for (const [i, n] of nums.entries()) {
        if (map.has(n) && map.get(n) !== i) {
            map.delete(n);
            count++;
        }
    }
    
    return count;
};

let result;
result = findPairs([1, 3, 1, 5, 4], 0);
console.log(result);