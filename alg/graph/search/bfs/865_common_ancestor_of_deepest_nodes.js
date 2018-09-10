// prob: https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
    let cur_level, next_level, node;

    cur_level = [root];

    // find deepest level (scan downward) - O(n)
    while (cur_level.length > 0) {
        next_level = [];
        for (const node of cur_level) {
            if (node.left !== null) {
                node.left.p = node;
                next_level.push(node.left);
            }
            if (node.right !== null) {
                node.right.p = node;
                next_level.push(node.right);
            }
        }
        if (next_level.length === 0) {
            break;
        } else {
            cur_level = next_level;
        }
    }

    // find common ancestor (scan upward) - O(n) worst case
    cur_level = new Set(cur_level);

    while (cur_level.size > 1) {
        next_level = new Set();
        for (const node of cur_level) {
            next_level.add(node.p);
        }
        cur_level = next_level;
    }

    return cur_level.entries().next().value[0];
};