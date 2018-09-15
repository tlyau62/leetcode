// problem: https://leetcode.com/problems/binary-tree-postorder-traversal/description/
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
var postorderTraversal = function(root) {
    const nums = [];
    
    postorder(root);
    
    return nums;
    
    function postorder(node) {
        if (node === null) {
            return;
        }
        
        postorder(node.left);
        postorder(node.right);
        nums.push(node.val);
    }
};