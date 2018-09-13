// dfs, O(n)

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    let isB = true;

    dfs(root, 0);

    return isB;

    function dfs(node, d) {
        if (!isB || node === null) {
            return d;
        }

        let l, r;

        l = dfs(node.left, d + 1);
        r = dfs(node.right, d + 1);

        if (Math.abs(l - r) > 1) {
            isB = false;
        }

        return Math.max(l, r);
    }

};