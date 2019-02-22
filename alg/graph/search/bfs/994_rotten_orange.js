// /**
//  * Phase 1: working
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var orangesRotting = function (grid) {
//     let nodes, level, numRotten, numOrange;

//     numOrange = 0
//     nodes = findRotten();
//     level = 0;
//     numRotten = nodes.length;

//     while (nodes.length > 0) {
//         nodes = bfs(nodes);
//         numRotten += nodes.length;
//         if (nodes.length > 0) {
//             level++;
//         }
//     }

//     return numRotten === numOrange ? level : -1;

//     function findRotten() {
//         const rotten = [];

//         for (let i = 0; i < grid.length; i++) {
//             for (let j = 0; j < grid[i].length; j++) {
//                 if (grid[i][j] !== 0) {
//                     numOrange++;
//                 }
//                 if (grid[i][j] === 2) {
//                     rotten.push({ i, j });
//                 }
//             }
//         }

//         return rotten;
//     }

//     function bfs(nodes) {
//         const next_nodes = [];

//         for (const node of nodes) {
//             if (node.i - 1 >= 0 && grid[node.i - 1][node.j] === 1) {
//                 grid[node.i - 1][node.j] = 2;
//                 next_nodes.push({ i: node.i - 1, j: node.j });
//             }
//             if (node.j - 1 >= 0 && grid[node.i][node.j - 1] === 1) {
//                 grid[node.i][node.j - 1] = 2;
//                 next_nodes.push({ i: node.i, j: node.j - 1 });
//             }
//             if (node.i + 1 < grid.length && grid[node.i + 1][node.j] === 1) {
//                 grid[node.i + 1][node.j] = 2;
//                 next_nodes.push({ i: node.i + 1, j: node.j });
//             }
//             if (node.j + 1 < grid[node.i].length && grid[node.i][node.j + 1] === 1) {
//                 grid[node.i][node.j + 1] = 2;
//                 next_nodes.push({ i: node.i, j: node.j + 1 });
//             }
//         }

//         return next_nodes;
//     }
// };

/**
 * Phase 2: refractor
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let nodes, level, numRotten, numFreshOrange;

    numFreshOrange = 0;
    nodes = findRotten();
    level = 0;

    while (nodes.length > 0) {
        nodes = bfs(nodes); // reduce numFreshOrange
        if (nodes.length > 0) {
            level++;
        }
    }

    return numFreshOrange === 0 ? level : -1;

    function findRotten() {
        const rotten = [];

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 2) {
                    rotten.push({ i, j });
                } else if (grid[i][j] === 1) {
                    numFreshOrange++;
                }
            }
        }

        return rotten;
    }

    function bfs(nodes) {
        const next_nodes = [];
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
        let x, y;
        
        for (const node of nodes) {
            for (const dir of dirs) {
                x = node.i + dir[0];
                y = node.j + dir[1];
                
                if (x < 0 || y < 0 || x >= grid.length || y >= grid[x].length || grid[x][y] !== 1) {
                    continue;
                }
                
                grid[x][y] = 2;
                next_nodes.push({ i: x, j: y });
                numFreshOrange--;
            }
        }

        return next_nodes;
    }
};

let result = orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]);
console.log(result);