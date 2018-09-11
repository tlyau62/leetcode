/**
 * search on binary tree (Accepted)
 * worst case (all are letters) => time O(2^n), n = S size
 *
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {

    const res = [];
    dfs(S.toLowerCase().split(''), 0);
    return res;

    function dfs(S, i) {
        if (i >= S.length) {
            res.push(S.join(''));
            return;
        }

        let newS;
        if (S[i] >= 'a' && S[i] <= 'z' || S[i] >= 'A' && S[i] <= 'Z') {
            dfs(S, i + 1, res);

            newS = S.slice();
            newS[i] = newS[i].toUpperCase();
            dfs(newS, i + 1);
        } else {
            dfs(S, i + 1);
        }

    }
};