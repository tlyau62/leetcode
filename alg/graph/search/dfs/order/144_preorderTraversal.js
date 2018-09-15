// problem: https://leetcode.com/problems/binary-tree-preorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {

    const nums = [];

    preorder(root);

    return nums;

    function preorder(node) {
        if (node === null) {
            return;
        }

        nums.push(node.val);
        preorder(node.left);
        preorder(node.right);
    }
};