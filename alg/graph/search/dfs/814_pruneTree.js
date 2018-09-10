/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {

    let remove_root = dfs(root);
    return remove_root ? null : root;

    function dfs(node) {
        if (node === null) {
            return true;
        }

        if (isLeaf(node)) {
            return node.val === 0; // tell parent whether to remove this node
        }

        let remove_left, remove_right;

        remove_left = dfs(node.left);
        remove_right = dfs(node.right);

        // remove child
        remove_left && (node.left = null);
        remove_right && (node.right = null);

        // tell parent whether this node should be removed
        return node.val === 0 && remove_left && remove_right;
    }

    function isLeaf(node) {
        return node.left === null && node.right === null;
    }
};