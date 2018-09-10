/**
 * bfs, push last item at each level
 */
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
var rightSideView = function (root) {

    if (root == null) {
        return [];
    }

    const res = [];
    let cur, next;

    cur = [root];

    while (cur.length > 0) {
        res.push(cur[cur.length - 1].val);

        next = [];
        for (let i = 0; i < cur.length; i++) {
            cur[i].left && next.push(cur[i].left);
            cur[i].right && next.push(cur[i].right);
        }
        cur = next;
    }

    return res;
};