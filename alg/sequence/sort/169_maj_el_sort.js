/**
 * sort first, count max el
 * time: n lg n
 * 
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums = nums.sort();

    return nums.reduce((s, c) => {
        if (c === s[0]) {
            s[2]++;
            if (s[2] > s[3]) {
                s[1] = s[0];
                s[3] = s[2];
            }
        } else {
            s[0] = c;
            s[2] = 1;
        }
        return s;
    }, [nums[0], nums[0], 0, 0])[1];
};

let result;
result = majorityElement([3, 2, 3]);
console.log(result);