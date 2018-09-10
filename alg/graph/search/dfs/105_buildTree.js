/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    if (preorder.length === 0) {
        return null;
    }

    // inorder to map
    inorder = toMap(inorder);

    // dfs
    const root = new TreeNode(preorder[0]);
    let next = 1;
    dfs(root, 0, inorder.size - 1);
    return root;

    function toMap(inorder) {
        const inorder_map = new Map();
        for (const [i, n] of inorder.entries()) {
            inorder_map.set(n, i);
        }
        return inorder_map;
    }

    function dfs(node, left, right) {
        let i0, i1;

        i0 = inorder.get(node.val);

        i1 = inorder.get(preorder[next]);
        if ((i1 >= left && i1 <= right) && i0 - i1 > 0) {
            node.left = new TreeNode(preorder[next]);
            next++;
            dfs(node.left, left, i0 - 1);
        }

        i1 = inorder.get(preorder[next]); // care next is a global var
        if (i1 >= left && i1 <= right && i0 - i1 < 0) {
            node.right = new TreeNode(preorder[next]);
            next++;
            dfs(node.right, i0 + 1, right);
        }
    }
};