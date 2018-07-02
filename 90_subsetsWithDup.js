/**
 * 78_subsets + hashTable => no memory limit exceed
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    if (nums.length === 0) {
        return [[]];
    }

    const res = [];
    const map = new Map();
    nums = nums.sort();
    dfs(0, []);

    for (const [key, val] of map.entries()) {
        res.push(key.length === 0 ? [] : key.split('_').map(str => parseInt(str)));
    }

    return res;

    function dfs(pos, acc) {
        let t, f;
        t = acc.slice();
        f = acc.slice();
        t.push(nums[pos]);

        if (pos < nums.length - 1) {
            dfs(pos + 1, f);
            dfs(pos + 1, t);
        } else {
            // we know empty set must populate to base case
            // [2] must populate to base case
            // [2, 3] must populate to base case, and so on
            // so, it is ok to add them at the base case to remove duplicate
            map.set(f.join('_'), true);
            map.set(t.join('_'), true);
        }
    }
};