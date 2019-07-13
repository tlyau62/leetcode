/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    return dfs(root);

    function dfs(node) {
        let sum;

        if (!node) {
            return 0;
        }

        if (node.val < L) {
            sum = dfs(node.right);
        } else if (node.val > R) {
            sum = dfs(node.left);
        } else {
            sum = node.val + dfs(node.right) + dfs(node.left);
        }

        return sum;
    }
};