/**
 * beat 97%
 * 
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count;
    let i, j;

    count = 0;
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            if (dfs(i, j)) {
                count++;
            }
        }
    }

    return count;

    function dfs(i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length
            || grid[i][j] !== '1') {
            return false;
        }

        // mark visited
        grid[i][j] = -1;

        // search in 4 dir
        dfs(i + 1, j); // r
        dfs(i, j + 1); // b
        dfs(i - 1, j); // t
        dfs(i, j - 1); // l

        return true;
    }
};