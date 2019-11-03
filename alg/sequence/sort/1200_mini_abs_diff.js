/**
 * problem: https://leetcode.com/problems/minimum-absolute-difference/
 * 
 * key idea:
 * 1. sort
 * 
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    const ans = [];    
    let minDiff = Infinity;
    
    arr = arr.sort((a,b) => a - b);
    
    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - arr[i - 1]);
        
        diff < minDiff && (minDiff = diff);
    }
    
    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - arr[i - 1]);
        
        (diff == minDiff) && (ans.push([arr[i - 1], arr[i]]));
    }

    return ans;
};