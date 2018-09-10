/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const arrP = [], arrQ = [];
    
    toArray(p, arrP);
    toArray(q, arrQ);
    
    return isSame(arrP, arrQ);
};

// preorder trav
function toArray(root, arr) {
    if (!root) {
        arr.push(null);
        return;
    }
    
    arr.push(root.val);
    toArray(root.left, arr);
    toArray(root.right, arr);
}

function isSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    for (const [i, n] of arr1.entries()) {
        if (n !== arr2[i]) {
            return false;
        }
    }
    
    return true;
}