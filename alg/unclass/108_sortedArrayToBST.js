/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    let root = null;
    bsearch(root, 0, nums.length - 1);
    return root;

    function bsearch(node, left, right) {
        if (left > right) {
            return;
        }

        const mid = Math.floor((left + right) / 2);
        const new_node = new TreeNode(nums[mid]);

        if (root === null) {
            root = new_node;
        } else {
            insertBST(node, new_node);
        }

        bsearch(new_node, left, mid - 1);
        bsearch(new_node, mid + 1, right);
    }

    function insertBST(node, new_node) {
        if (new_node.val > node.val) {
            if (node.right === null) {
                node.right = new_node;
            } else {
                insertBST(node.right, new_node);
            }
        } else if (new_node.val < node.val) {
            if (node.left === null) {
                node.left = new_node;
            } else {
                insertBST(node.left, new_node);
            }
        }
    }
};