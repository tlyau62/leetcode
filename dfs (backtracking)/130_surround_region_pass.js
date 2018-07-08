/**
 * dfs, marked visted 'f' as the actual 'O', others are 'X'
 * beat 100%
 *
 * the loop can be reduced to 1-pass using spiral order scanning
 * from outer most to inner most
 * 
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {

    let i, j;

    // extending 'O' piece at border
    for (i = 0; i < board.length; i++) {

        // 1st row / last row => scan full rows
        if (i === 0 || i === board.length - 1) {
            for (j = 0; j < board[i].length; j++) {
                dfs(i, j);
            }
        } else { // scan only 1st and last piece
            dfs(i, 0);
            dfs(i, board[i].length - 1);
        }

    }

    // fill only 'f' piece is 'O', others are 'X'
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'f') {
                board[i][j] = 'O';
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }

    function dfs(i, j) {

        // collecting all condition in 1 place improve performance
        // due to no need to calculate offseting in other places
        // e.g. if (board[i][j + 1] === 'O') ...
        if (i < 0 || i >= board.length || j < 0 || j >= board[i].length
            || board[i][j] !== 'O') {
            return;
        }

        // mark visited, visited = free
        board[i][j] = 'f';

        // search in 4 dir
        dfs(i - 1, j); // top
        dfs(i, j - 1); // left
        dfs(i + 1, j);// bot
        dfs(i, j + 1); // right
    }

};
