// https://leetcode.com/problems/maximum-binary-tree/description/
// ~quick-sort -> O(n lg n) time
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
var constructMaximumBinaryTree = function (nums) {

    return buildTree(nums, 0, nums.length - 1);

    function buildTree(nums, i, j) {

        if (i > j) {
            return null;
        }

        const p = partition(nums, i, j);
        const node = new TreeNode(nums[p]);

        node.left = buildTree(nums, i, p - 1);
        node.right = buildTree(nums, p + 1, j);

        return node;

    }

    function partition(nums, i, j) {
        let max = i; // index of max value
        for (let k = i + 1; k <= j; k++) {
            if (nums[k] > nums[max]) {
                max = k;
            }
        }
        return max;
    }

};