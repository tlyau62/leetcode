/**
 * problem: https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
 * mind flow:
 * 1. using a queue to keep track all the ancestor for each branch,
 *    then max(queue) - min(queue) produce the max diff in each branch
 * 2. memory can be optimized by using an object
 * 
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
var maxAncestorDiff = function (root) {
    return dfs(root, {
        min: Infinity,
        max: -Infinity
    });

    function dfs(node, minmax) {
        if (!node) {
            return -Infinity;
        }

        minmax.min = Math.min(minmax.min, node.val);
        minmax.max = Math.max(minmax.max, node.val);

        if (!node.left && !node.right) {
            return minmax.max - minmax.min;
        }
        return Math.max(dfs(node.left, clone(minmax)), dfs(node.right, clone(minmax)));
    }

    function clone(minmax) {
        return {
            min: minmax.min,
            max: minmax.max
        };
    }
};