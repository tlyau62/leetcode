// bfs, O(n)
// be careful when root is null

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {
    let cur_level, next_level;

    cur_level = root ? [root] : [];

    while (cur_level.length > 0) {
        next_level = [];
        for (let i = 0; i < cur_level.length; i++) {
            cur_level[i].next = cur_level[i + 1] || null;
            cur_level[i].left && next_level.push(cur_level[i].left);
            cur_level[i].right && next_level.push(cur_level[i].right);
        }
        cur_level = next_level;
    }

};