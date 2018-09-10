/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    return dfs(root, 0);

    function dfs(root, dep) {
        if (root === null) {
            return dep;
        }

        return Math.max(dfs(root.left, dep + 1), dfs(root.right, dep + 1));
    }
};

var maxDepth_faster = function(root) {
    if (root === null) {
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};