/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// inorder traverse, linear time
var kthSmallest = function (root, k) {

    let seq, el;

    seq = 0;
    el = null;

    traverse(root);

    return el;

    function traverse(node) {
        if (node === null || el !== null) {
            return;
        }
        traverse(node.left);
        seq++;
        if (seq === k) {
            el = node.val;
        }
        traverse(node.right);
    }
};