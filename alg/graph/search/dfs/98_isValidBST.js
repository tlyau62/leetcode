/**
 * beat 98.63%
 * 
 * for each node, keep a [min,max] on its left subtree and [min,max] on its right subtree,
 * and pass [min left subtree, max right subtree] to parent node
 *
 * return
 * false if this subtree violates left subtree's max < this node.val < right subtree's min,
 * [left[0], right[1]] if no violate and both left, right subtree exists,
 * [left[0], node.val] if no violate and no right subtree,
 * [node.val, right[1]] if no violate and no left subtree
 * [node.val, node.val] if base case reached
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

    if (root === null) {
        return true;
    }

    return dfs(root) && true;

    function dfs(node) {

        let left, right;
        let minmax;

        minmax = [node.val, node.val];

        // base case
        if (isLeaf(node)) {
            return minmax;
        }

        // search left, return false if left subtree or this subtree root node violates def
        left = node.left && dfs(node.left);
        if (left !== null) {
            if (left === false || left[1] >= node.val) {
                return false;
            } else {
                minmax[0] = left[0];
            }
        }

        // search right, return false if right subtree or this subtree root node violates def
        right = node.right && dfs(node.right);
        if (right !== null) {
            if (right === false || right[0] <= node.val) {
                return false;
            } else {
                minmax[1] = right[1];
            }
        }

        // return [min, max] of this subtree to the parent
        return minmax;

    }

    function isLeaf(node) {
        return node.left === null && node.right === null;
    }


};