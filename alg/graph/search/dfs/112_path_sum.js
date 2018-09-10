/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (root === null) {
        return false;
    }

    let found = false;
    dfs(root, 0);
    return found;

    function dfs(node, cur_sum) {
        if (found || !node) {
            return;
        }
        cur_sum += node.val
        if (node.left === null && node.right === null) {
            if (cur_sum === sum) {
                found = true;
            }
            return;
        }

        return dfs(node.left, cur_sum) || dfs(node.right, cur_sum);
    }
};