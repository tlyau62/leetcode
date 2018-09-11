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
var largestValues = function (root) {
    const res = [];
    let cur_level, next_level, target;

    if (root === null) {
        return [];
    }

    cur_level = [root];

    while (cur_level.length > 0) {
        res.push(Math.max(...cur_level.map(e => e.val)));

        next_level = [];
        for (let i = 0; i < cur_level.length; i++) {
            cur_level[i].left !== null && next_level.push(cur_level[i].left);
            cur_level[i].right !== null && next_level.push(cur_level[i].right);
        }

        cur_level = next_level;
    }

    return res;
};