// problem: https://leetcode.com/problems/binary-tree-inorder-traversal/
/**
 * search a tree
 * => no loop
 * => no need to record visted node
 * 
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
var inorderTraversal = function(root) {
    
    const res = [];
    inorder(root);
    return res;
    
    function inorder(node) {
        if (node === null) {
            return;
        }
        
        inorder(node.left);
        res.push(node.val);
        inorder(node.right);
    }
};