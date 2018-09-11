// https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    const res = [];
    let cur_level, next_level, target;

    cur_level = [root];

    while (cur_level.length > 0) {
        res.push(cur_level.reduce((a, e) => a + e.val, 0) / cur_level.length);

        next_level = [];
        for (let i = 0; i < cur_level.length; i++) {
            cur_level[i].left !== null && next_level.push(cur_level[i].left);
            cur_level[i].right !== null && next_level.push(cur_level[i].right);
        }

        cur_level = next_level;
    }

    return res;
};