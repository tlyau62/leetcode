/**
 * original solution:
 * problem:
 * if >1 branches, then not all branches can be updated correctly
 *
 * reason:
 * branch 2 determines wether the region is surrounded
 * but branch 1 is traversed faster than branch 2
 * so after branch 2 finished, the function will be return to branch 1
 * so branch 1 region will not be updated. see example
 * 
 * example:
 * XXXXX
 * XXOOX <- branch 1
 * XOOXX
 * XXOOX <- branch 2
 * XXXXX
 * 
 * result:
 * XXXXX
 * XXOOX <- branch 1
 * XXXXX
 * XXXXX <- branch 2
 * XXXXX
 * 
 * solution:
 * searching this region is to be surrounded or not is not important.
 * this search can be replaced by scanning only at the border.
 * this guarantees the region are not surrounded
 * 
 * see full solution: 130_surround_region_pass.js
 * 
 */
/**
 * note that no need to check on the boarder since they are free
 * and special case [["O","O","O"],["O","O","O"],["O","O","O"]]
 * 
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {

    let i, j;
    for (i = 1; i < board.length - 1; i++) {
        for (j = 1; j < board[i].length - 1; j++) {
            if (board[i][j] === 'O') {
                dfs(i, j);
            }
        }
    }

    function dfs(i, j) {

        // is this is free from bounded?
        if (i - 1 < 0 || j - 1 < 0 || i + 1 >= board.length || j + 1 >= board[i].length) {
            return true;
        }

        // mark visited
        board[i][j] = '-';

        // find freedom
        let free = false;

        if (board[i - 1][j] === 'O') { // top
            free = dfs(i - 1, j);
        }

        if (!free && board[i][j - 1] === 'O') { // left
            free = dfs(i, j - 1);
        }

        if (!free && board[i + 1][j] === 'O') { // bot
            free = dfs(i + 1, j);
        }

        if (!free && board[i][j + 1] === 'O') { // right
            free = dfs(i, j + 1);
        }

        if (free === false) {
            board[i][j] = 'X';
        } else {
            board[i][j] = 'O';
        }

        return free;
    }
};

function printBoard(board) {
    let row;
    let i, j;
    for (i = 0; i < board.length; i++) {
        row = '';
        for (j = 0; j < board[i].length; j++) {
            row += board[i][j];
        }
        console.log(row);
    }
}

// let board = [["O", "X", "X", "O", "X"], ["X", "O", "O", "X", "O"], ["X", "O", "X", "O", "X"], ["O", "X", "O", "O", "O"], ["X", "X", "O", "X", "O"]]
let board = [["O", "X", "X", "O", "X"], ["X", "O", "O", "X", "O"], ["X", "O", "X", "O", "X"], ["O", "X", "O", "O", "O"], ["X", "X", "X", "X", "X"]]

printBoard(board);
console.log();
solve(board);
printBoard(board);