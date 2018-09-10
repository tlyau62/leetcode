/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrderBottom = function (root) {

    let current, next, res;

    if (root === null) {
        return [];
    }
    current = [root];
    res = [];

    while (current.length > 0) {

        // current level
        res.push(current.map(n => n.val));

        // prepare next level
        next = [];
        for (const node of current) {
            node.left && next.push(node.left);
            node.right && next.push(node.right);
        }
        current = next;

    }

    return res.reverse();
};