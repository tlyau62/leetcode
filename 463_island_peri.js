/**
 * explain:
 * the perimeter of a cell is determined by nearest 4 neighbour cells (north, east, south, west).
 * If there is an island(cell value is 1) on 1 side of the current cell, then the perimeter of that side is not counted.
 * A cell has 0 perimeter if each of its side is connected to a island.
 * Therefore, this problem is solved by scanning 4 sides of each cell of the grid
 * Time complexity will be O(n).
 * 
 * note:
 * no need to consider disconnected cell, which is stated in the question.
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let peri = 0;
    for (const [i, row] of grid.entries()) {
        for (const [j, cell] of row.entries()) {
            if (cell === 1) {
                peri += (4 - countNeigh(grid, i, j));
            }
        }
    }
    return peri
};

function countNeigh(grid, i, j) {
    let count = 0;
    
    // search in 4 directions
    if (i - 1 >= 0 && grid[i - 1][j] === 1) {
        count++;
    }
    
    if (i + 1 < grid.length && grid[i + 1][j] === 1) {
        count++;
    }
    
    if (j - 1 >= 0 && grid[i][j - 1] === 1) {
        count++;
    }
    
    if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
        count++;
    }
    
    return count;
}

let result;
result = islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]);
console.log(result);