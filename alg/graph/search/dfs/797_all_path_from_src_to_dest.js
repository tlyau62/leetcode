/**
 * dfs on graph
 * 
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {

    return dfs(0, graph.length - 1)
        .map(v => v.reverse());

    function dfs(node, dest) {

        if (node === dest) {
            return [[node]];
        }

        let visited, merge = [];
        for (let i = 0; i < graph[node].length; i++) {
            visited = dfs(graph[node][i], dest);
            for (let j = 0; j < visited.length; j++) {
                visited[j].push(node);
                merge.push(visited[j]);
            }
        }

        return merge;

    }
};