/**
 * dfs on tree = O(2n) = O(n)
 * tree => no need to check visited
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
var sumNumbers = function (root) {

    if (root === null) {
        return 0;
    }

    let sum = 0;
    solve(root, '');
    return sum;

    function solve(node, acc) {
        // leaf
        if (node.left === null && node.right === null) {
            sum += parseInt(acc + node.val.toString());
            return;
        }

        const currentVal = acc + node.val.toString();

        if (node.left) {
            solve(node.left, currentVal);
        }

        if (node.right) {
            solve(node.right, currentVal);
        }
    }
};