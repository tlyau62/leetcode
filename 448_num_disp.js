/**
 * if allow extra O(n) space, you sort the input and
 * find out the non-consecutive pair of elements as the missing nums.
 * 
 * but no extra space is allowed, so we replace O(n) space by using index + -ve value
 * input: [4,3,2,7,8,2,3,1]
 * input with extra info: [-4, -3, -2, -7, 8, 2, -3, -1], which is same as
 * [1, 2, 3, 4, null, null, 7, 8]
 * 
 * each element has 2 independent info.
 * abs value of element indicates the actual input.
 * -ve value with current index indicates input (current index + 1) has been visited.
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const result = [];
    
    for (const [i, n] of nums.entries()) {
        if (nums[Math.abs(n) - 1] > 0) {
            nums[Math.abs(n) - 1] *= -1;
        }
    }
    
    for (const [i, n] of nums.entries()) {
        if (n > 0) {
            result.push(i + 1);
        }
    }
    
    return result;
};


let result;
result = findDisappearedNumbers([4,3,2,7,8,2,3,1]);
console.log(result);