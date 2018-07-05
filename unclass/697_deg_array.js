/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    const map = new Map();
    let max = -1, minLength, temp;

    // get degree
    for (const [i, n] of nums.entries()) {
        temp = map.get(n);

        if (!temp) {
            temp = [1, i, i];
            map.set(n, temp);
        } else {
            temp[0]++;
            temp[2] = i;
        }

        max = Math.max(temp[0], max);
    }

    // get min length
    for (const [k, v] of map.entries()) {
        if (v[0] !== max) {
            continue;
        }

        if (!minLength) {
            minLength = v[2] - v[1] + 1;
        } else {
            minLength = Math.min(minLength, v[2] - v[1] + 1);
        }
    }

    return minLength;
};

let result;
result = findShortestSubArray([1, 2, 2, 3, 1]);
console.log(result);