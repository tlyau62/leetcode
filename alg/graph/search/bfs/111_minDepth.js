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
var minDepth = function (root) {

    if (root === null) {
        return 0;
    }

    let level, cur, next;

    level = 0;
    cur = [root];

    while (cur.length > 0) {
        level++;
        next = [];

        for (const node of cur) {
            if (node.left === null && node.right === null) { // reach leaf
                return level;
            }
            node.left !== null && next.push(node.left);
            node.right !== null && next.push(node.right);
        }

        cur = next;
    }

    return level;
};