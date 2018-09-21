// problem: https://leetcode.com/problems/maximum-width-of-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    
    if (root === null) {
        return 0;
    }
    
    let cur_level, next_level;
    let max_width, l, r;
    
    root.val = 0;
    max_width = 1;
    cur_level = [root];
    while (cur_level.length > 0) {
        next_level = [];
        
        l = Infinity;
        r = -Infinity;
        
        for (let i = 0; i < cur_level.length; i++) {
            if (cur_level[i].left) {
                cur_level[i].left.val = 2 * cur_level[i].val;
                l = Math.min(l, cur_level[i].left.val);
                r = Math.max(r, cur_level[i].left.val);
                next_level.push(cur_level[i].left);
            }
            if (cur_level[i].right) {
                cur_level[i].right.val = 2 * cur_level[i].val + 1;
                l = Math.min(l, cur_level[i].right.val);
                r = Math.max(r, cur_level[i].right.val);
                next_level.push(cur_level[i].right);
            }
        }

        cur_level = next_level;
        
        if (l === Infinity || r === -Infinity) {
            max_width = Math.max(max_width, 1);
        } else {
            max_width = Math.max(max_width, r - l + 1);
        }
        
        
    }
    
    return max_width;
};