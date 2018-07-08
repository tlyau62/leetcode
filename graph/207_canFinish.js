/**
 * dfs + mem => cycle detection
 * with mem 68ms (beats 97%)
 * no mem 120ms (beats 40%)
 * 
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const graph = []; // hash table (adj list)
    const visited = []; // hash table for current dfs, true => dp[i] is visited, else not visited
    const dp = []; // hash table for current and previous dfs

    // init graph struct, visited & dp
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
        visited[i] = false;
        dp[i] = false;
    }

    // init graph edge
    for (let i = 0; i < prerequisites.length; i++) {
        graph[prerequisites[i][1]].push(prerequisites[i][0]);
    }

    // dfs on each course to check for a cycle
    for (let i = 0; i < visited.length; i++) {
        if (!dfs(i)) {
            return false;
        }
    }

    return true;

    // detect cycle
    function dfs(node) {

        // this node is visited before and ...
        if (visited[node]) { // contains cycle
            visited[node] = false; // reset visited for next node
            return false;
        } else if (dp[node]) {  // contains no cycle
            return true;
        }

        visited[node] = true;
        dp[node] = true;

        let isCyclic = true;
        for (let i = 0; i < graph[node].length && isCyclic; i++) {
            isCyclic = dfs(graph[node][i]);
        }

        // reset visited for next node
        visited[node] = false;

        // no need to reset or clean up dp, even if this branch has a cycle
        // since if it has a cycle, then the solution is false already

        return isCyclic;
    }
};

console.log(canFinish(3, [[0, 1], [1, 2], [2, 0]]));

// test case
// 2
// [[1,0]]
// 3
// [[0,1]]
// 3
// [[0,1],[1,2],[0,2]]
// 3
// [[0,1],[1,2],[2,0]]
// 3
// [[0,1],[1,0]]
// 4
// [[0,1],[0,2],[1,2],[3,1],[2,3]]
// 4
// [[0,1],[0,2],[1,2],[3,1],[3,2]]
//
// expect
// true
// true
// true
// false
// false
// false
// true