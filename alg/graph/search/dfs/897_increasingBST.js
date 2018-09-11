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
var increasingBST = function (root) {
    const newRoot = new TreeNode();
    let newRootPtr = newRoot;

    dfs(root);

    return newRoot.right;

    // in-order
    function dfs(node) {
        if (node === null) {
            return;
        }

        let left, right;

        // create backup
        left = node.left;
        right = node.right;

        // clean up for next recursive call
        node.right = node.left = null;

        dfs(left);
        newRootPtr.left = null;
        newRootPtr.right = node;
        newRootPtr = newRootPtr.right;
        dfs(right);
    }
};