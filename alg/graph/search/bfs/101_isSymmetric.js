/**
 * bfs + check mirror each level
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
var isSymmetric = function (root) {
    return bfs([root]);

    function bfs(list) {
        if (list.length === 0) {
            return true;
        }

        const next = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i] !== null) {
                next.push(list[i].left);
                next.push(list[i].right);
            }
        }

        // console.log(next.map(n => n && n.val) + ' ' + isMirror(next));
        if (!isMirror(next)) {
            return false;
        }

        return bfs(next);
    }

    function isMirror(list) {
        let right;
        for (let left = 0; left < Math.floor(list.length / 2); left++) {
            right = list.length - 1 - left;
            // 1, 2; 1, null; null, 1 t
            // 1, 1; null, null f
            if (list[left] !== null && list[right] !== null && list[left].val !== list[right].val
                || list[left] === null && list[right] !== null
                || list[left] !== null && list[right] === null) {
                return false;
            }
        }
        return true;
    }
};