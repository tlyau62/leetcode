/**
 * bipartition <-> graph with no odd cycle
 * each node keep a time record to calcalate odd/even cycle has occurs
 * odd cycle has a time diff with even number, even has odd number
 * 
 * e.g. each number represent node id and time,
 *      odd cycle is detected at 7 - 3 = 4, which is even
 * 1 ----- 2
 * |       |
 * |       |
 * 4 ----- 3(7)
 * |     / |  
 * |   /   |
 * | /     |
 * 5 ----- 6
 * 
 * time: O(V + Ve) = O(V + 2E) = O(V + E), e = number of incident edge
 * beat 100% (posted in the submission sample)
 * 
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (N, dislikes) {

    const g = toGraph(N, dislikes); // index start at 1
    const time = [];

    // init time (index start at 1)
    for (let v = 1; v <= N; v++) {
        time[v] = null;
    }

    // check cycle of odd length
    for (let v = 1; v <= N; v++) {
        // visited
        if (time[v] !== null) {
            continue;
        }

        // dfs on nodes
        if (dfs(v, time, 0)) {
            return false; // false === odd length cycle
        }
    }

    return true;

    function dfs(v, time, cur_time) {
        if (time[v] !== null) {
            return (cur_time - time[v]) % 2 === 1;
        }

        // mark current time
        time[v] = cur_time;

        // travel to neighbour
        const next_time = cur_time + 1;
        for (let i = 0; i < g[v].length; i++) {
            // search until a odd cycle occur
            if (dfs(g[v][i], time, next_time)) {
                return true;
            }
        }

        return false;
    }

    function toGraph(N, dislikes) {
        const v = [];

        // generate vertices
        for (let i = 0; i <= N; i++) {
            v.push([]);
        }

        // add neighbour
        for (let i = 0; i < dislikes.length; i++) {
            v[dislikes[i][0]].push(dislikes[i][1]);
            v[dislikes[i][1]].push(dislikes[i][0]);
        }

        return v;
    }

};