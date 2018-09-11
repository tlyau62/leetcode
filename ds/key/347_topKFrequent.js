/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    let temp;

    for (const n of nums) {
        temp = map.get(n);
        if (temp === undefined) {
            map.set(n, 1);
        } else {
            map.set(n, temp + 1);
        }
    }

    return Array.from(map)
        .sort((a, b) => b[1] - a[1]) // sort desc
        .slice(0, k) // get 1st k entries
        .map(a => a[0]); // get key only
};