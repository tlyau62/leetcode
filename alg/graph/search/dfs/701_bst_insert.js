/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {

    if (root === null) {
        return new TreeNode(val);
    } else if (val < root.val) {
        if (root.left === null) {
            root.left = new TreeNode(val);
        } else {
            insertIntoBST(root.left, val);
        }
    } else if (val > root.val) {
        if (root.right === null) {
            root.right = new TreeNode(val);
        } else {
            insertIntoBST(root.right, val);
        }
    }

    return root;
};