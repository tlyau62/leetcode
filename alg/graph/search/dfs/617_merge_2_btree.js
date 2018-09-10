// https://leetcode.com/problems/merge-two-binary-trees/description/
// apply dfs on 2 trees at the same time (beat 100%)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    
    if (t1 === null || t2 === null) {
        return t1 || t2;
    }
    
    dfs(t1, t2);
    return t1;
    
    function dfs(node1, node2) {
        
        node1.val += node2.val;
        
        if (node1.left && node2.left) {
            dfs(node1.left, node2.left);
        } else if (node1.left === null) {
            // copy left child from node2
            node1.left = node2.left;
        }
        
        if (node1.right && node2.right) {
            dfs(node1.right, node2.right);
        } else if (node1.right === null) {
            // copy right child from node2
            node1.right = node2.right;
        }
        
    }
};