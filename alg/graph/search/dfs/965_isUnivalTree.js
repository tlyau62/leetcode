/**
 * problem: https://leetcode.com/problems/univalued-binary-tree/description/
 * 
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
var isUnivalTree = function (root) {
    return dfs(root, root);

    function dfs(node, p) {
        if (node === null) {
            return true;
        }

        if (node.val !== p.val) {
            // the result is false, no need to continue to search
            return false;
        }

        // keep searching for any false branch
        return dfs(node.left, p) && dfs(node.right, p);
    }
};