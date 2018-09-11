/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    if (!root) {
        return [];
    }

    const result = dfs(root, sum, 0);
    if (result) {
        for (let i = 0; i < result.length; i++) {
            result[i] = result[i].reverse();
        }
    }
    return result || [];
};

function dfs(node, sum, acc) {
    const { val, left, right } = node;
    let lresult, rresult, results = [];

    if (!left && !right) {
        return (acc + val) === sum ? [[val]] : null;
    }

    if (left) {
        lresult = dfs(left, sum, acc + val);
        if (lresult) {
            results = results.concat(lresult);
        }
    }

    if (right) {
        rresult = dfs(right, sum, acc + val);
        if (rresult) {
            results = results.concat(rresult);
        }
    }

    for (let i = 0; i < results.length; i++) {
        results[i].push(val);
    }

    return results;

}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(5);
root.left = new TreeNode(1);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(1);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(2);
root.left.right.right = new TreeNode(2);
root.right = new TreeNode(2);

console.log(pathSum(root, 10));