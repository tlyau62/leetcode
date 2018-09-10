// dfs + hash table on btree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {

    const map = new Map();

    // cal res
    dfs(root, map);

    // output res
    const res = Array.from(map);

    if (map.size === 0) {
        return res;
    } else {
        let max = res.map(a => a[1]).reduce((a, e) => e > a ? e : a);

        return res.filter(a => a[1] === max).map(a => a[0]);
    }

    function dfs(node, map) {
        if (node === null) {
            return 0;
        }

        let sum = node.val;

        sum += dfs(node.left, map);
        sum += dfs(node.right, map);

        map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);

        return sum;
    }
};