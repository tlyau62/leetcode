/**
 * note
 * - string concat performance vs array join
 *   https://stackoverflow.com/questions/7299010/why-is-string-concatenation-faster-than-array-join
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const res = [];
    if (root !== null) {
        dfs(root, []);
    }
    return res;

    function dfs(node, cur) {
        cur.push(node.val);
        if (node.left === null && node.right === null) {
            res.push(cur.join('->'));
            return;
        }
        node.left !== null && dfs(node.left, cur.slice());
        node.right !== null && dfs(node.right, cur.slice());
    }
};