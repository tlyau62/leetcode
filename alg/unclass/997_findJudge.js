/**
 * problem: https://leetcode.com/problems/find-the-town-judge/description/
 * 
 * find sufficient cond on judge:
 * - gain everybody trusts => trust number = N - 1
 * - trust no one => can be done by -1 on trust number => kick out
 * 
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    const map = new Array(N + 1).fill(0);
    let res;

    map[0] = undefined;

    for (const t of trust) {
        ++map[t[1]];
        --map[t[0]];
    }

    return map.findIndex((e) => e === N - 1);
};