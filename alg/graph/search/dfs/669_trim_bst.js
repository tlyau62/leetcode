// https://leetcode.com/problems/trim-a-binary-search-tree/description/
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
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {

    return dfs(root, L, R);

    function dfs(node, L, R) {

        while (node !== null) {
            if (node.val < L) {
                // current node is less than L
                // replace this node with greater one
                node = node.right;
            } else if (node.val > R) {
                // current node is greater than R
                // replace this node with less one
                node = node.left;
            } else {
                break;
            }
        }

        if (node !== null) {
            // after replace, if this node is not null, than wait to append child
            node.left = dfs(node.left, L, R);
            node.right = dfs(node.right, L, R);
        }

        return node;
    }

};