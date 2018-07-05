/**
 * dfs in 4 directions
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let max_area, area;
    max_area = 0;

    for (const [i, row] of grid.entries()) {
        for (const [j, cell] of row.entries()) {
            if (cell !== 1) {
                continue;
            }

            area = area_dfs(grid, i, j, 1);
            if (area > max_area) {
                max_area = area;
            }
        }
    }

    return max_area;
};

function area_dfs(grid, i, j, area) {
    grid[i][j] = -1;

    // search in 4 dir
    if (i - 1 >= 0 && grid[i - 1][j] === 1) {
        area = area_dfs(grid, i - 1, j, area + 1);
    }

    if (i + 1 < grid.length && grid[i + 1][j] === 1) {
        area = area_dfs(grid, i + 1, j, area + 1);
    }

    if (j - 1 >= 0 && grid[i][j - 1] === 1) {
        area = area_dfs(grid, i, j - 1, area + 1);
    }

    if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
        area = area_dfs(grid, i, j + 1, area + 1);
    }

    return area;

}

let result;
result = maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]]);

console.log(result);