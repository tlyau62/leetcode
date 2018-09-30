// problem:
// https://leetcode.com/problems/assign-cookies/description/
//
// prove:
// if s[j] < g[i], then s[j] cannot be assigned to g[i]
// if s[j] = g[i], then s[j] fits g[i], so count++
// if s[j] > g[i]
//   if don't fits s[j] to g[i],
//   then no smaller s[i < j] can fit to g[i],
//   even later fit s[j] to g[k > i] which are both equal
//   effect on count is the same, both cause count++
//   effect is not the same if the cookie can be split into multiple smaller parts
//
// time: O(n lg n)

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    const sort_int = (a, b) => a - b;
    let i, j;
    
    i = j = 0;
    g = g.sort(sort_int);
    s = s.sort(sort_int);
    
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            // assign cookie s[j] to g[i]
            i++;
        }
        j++;
    }
    
    return i;
};