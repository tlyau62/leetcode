/**
 * problem:
 * https://leetcode.com/problems/binary-tree-tilt/description/
 * 
 * mind flow:
 * 1. dfs, return value should be sum of the subtree.
 *    but, how to keep track of tilt?
 *    global var seems work
 */
/**
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
var findTilt = function(root) {
    let tilt = 0;
    
    dfs(root);
    
    return tilt;
    
    function dfs(node) {
        if (node === null) {
            return 0;
        }
        
        let left, right, sum;
        
        left = dfs(node.left);
        right = dfs(node.right);
        sum = node.val + left + right;
        
        tilt += Math.abs(left - right);
        
        return sum;
    }
    
};