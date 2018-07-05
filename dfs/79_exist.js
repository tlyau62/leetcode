/**
 * dfs with recovery
 * no. of node = mn
 * no. of edge = mn * 4
 * time: O(mn + 4*mn) = O(5mn) = O(mn), total: O((mn)^2)
 * 
 * revision: why dfs's time O(V + E)
 * => at least V; E includes the visting a visted node
 * => so total O(V + E)
 * 
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    let isExists = false;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            dfs(0, i, j);
            if (isExists) {
                return true;
            }
        }
    }

    return false;

    function dfs(pos, i, j) {

        if (i < 0 || i >= board.length || j >= board[i].length || j < 0) {
            return;
        } else if (board[i][j] === -1) {
            return;
        }

        let char = board[i][j];
        board[i][j] = -1;

        if (word[pos] === char) {
            if (pos === word.length - 1) { // target hit
                isExists = true;
            } else {
                // either 1 brunch leads to isExists be true if the word can be found
                dfs(pos + 1, i + 1, j); // down
                dfs(pos + 1, i, j + 1); // right
                dfs(pos + 1, i - 1, j); // up
                dfs(pos + 1, i, j - 1); // left
            }
        }

        // recover the matrix when no word can be found
        if (word[pos] !== char || !isExists) {
            board[i][j] = char;
        }

    }
};