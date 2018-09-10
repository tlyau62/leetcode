/**
 * always remember bfs should not go back to previous level to access the parent 
 * solve by dfs
 *
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
var invertTree = function (root) {

    dfs(root);
    return root;

    function dfs(node) {
        if (node === null) {
            return;
        }

        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        dfs(node.left);
        dfs(node.right);
    }
};