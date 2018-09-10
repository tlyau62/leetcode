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
var zigzagLevelOrder = function (root) {

    let current, next, res, flip;

    if (root === null) {
        return [];
    }
    current = [root];
    res = [];
    flip = true;

    while (current.length > 0) {

        // current level
        if (flip) {
            res.push(current.map(n => n.val));
        } else {
            res.push(current.map(n => n.val).reverse());
        }
        flip = !flip;

        // prepare next level
        next = [];
        for (const node of current) {
            node.left && next.push(node.left);
            node.right && next.push(node.right);
        }
        current = next;

    }

    return res;
};