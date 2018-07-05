/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    if (nums.length === 0) {
        return [[]];
    }

    const res = [];
    dfs(0, []);

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
            res.push(f, t);
        }
    }
};

/**
 * perm [1,2,3]
 * [], [3] => [],[2],[3],[2,3] => [],[1],[2],[2,1],[3],[3,1],[2,3],[1,2,3]
 */