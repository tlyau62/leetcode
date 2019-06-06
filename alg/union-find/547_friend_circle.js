// problem:
// https://leetcode.com/problems/friend-circles/description/
//
// union find, no optimzed, O(M)
// dfs should also work, O(M), not tested

/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function (M) {
    const gp = [];

    for (let i = 0; i < M.length; i++) {
        gp[i] = i;
    }

    let groupNum = M.length;
    for (let i = 1; i < M.length; i++) {
        for (let j = 0; j < i; j++) {
            if (M[i][j] === 1) {
                union(gp, i, j);
            }
        }
    }

    return groupNum;

    function find(gp, p) {
        while (p !== gp[p]) {
            p = gp[p];
        }
        return p;
    }

    function union(gp, p, q) {
        const parentP = find(gp, p),
            parentQ = find(gp, q);

        if (parentP !== parentQ) {
            // merge 2 group
            groupNum--;
            gp[parentP] = parentQ;
        } else {
            // already same group
        }
    }

};