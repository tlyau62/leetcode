/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    return bsearch(nums, 0, nums.length - 1);
    
    function bsearch(nums, left, right) {
        
        if (left === right) {
            return nums[left];
        }
        
        let mid = ~~((left + right) / 2);
        
        if (nums[mid] > nums[right]) {
            return bsearch(nums, mid + 1, right);
        } else {
            return bsearch(nums, left, mid);
        }
    }
};