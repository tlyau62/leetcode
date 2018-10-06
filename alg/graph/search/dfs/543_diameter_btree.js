/**
 * problem:
 * https://leetcode.com/problems/diameter-of-binary-tree/description/
 * 
 * mind flow:
 * 1. local max = left path len + right path len
 * 2. each local max can be the global max
 * 3. local max m_i depends partly on local max m_i-1's left path len or right path len
 *    => return value will be max(local max m_i-1's left path len, right path len)
 * 4. but, how to keep track of the global max? add a global variable global_max
 * 5. time: O(n)
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
var diameterOfBinaryTree = function (root) {
    let global_max = 0;

    dfs(root);

    return global_max;

    function dfs(node) {
        if (node === null) {
            return -1; // no path = lacking 1 path
        }

        let left, right;

        left = dfs(node.left) + 1;
        right = dfs(node.right) + 1;

        global_max = Math.max(global_max, left + right); // left + right => local max

        return Math.max(left, right);
    }
};