/**
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/description/
 * 
 * time O(n)
 * note: should have check sorted.length === 1, but it is accepted
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    
    const sorted = [];
    let min, diff;
    
    dfs(root);
    min = sorted[1] - sorted[0];
    
    for (let i = 2; i < sorted.length; i++) {
        diff = sorted[i] - sorted[i - 1];
        if (diff < min) {
            min = diff;
        }
    }
    
    return min;
    
    // inorder
    function dfs(node) {
        
        if (node === null) {
            return;
        }
        
        dfs(node.left);
        sorted.push(node.val);
        dfs(node.right);
    }
};