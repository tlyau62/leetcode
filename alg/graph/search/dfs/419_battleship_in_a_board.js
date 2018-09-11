/**
 * https://leetcode.com/problems/battleships-in-a-board/description/
 * 
 * O(1) space  => dfs without mem => how to check is visited?
 * => find a way to remove any current path leading to visited node
 * => sol: count only the 1st node of the ship and ignore the non-1st node
 * => 1st node: 1 cell above is not 'X' and 1 cell left is not 'X'
 *
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'X' && isFirst(board, i, j)) {
                count++;
            }
        }
    }
    
    return count;
    
    function isFirst(board, i, j) {
        
        if (i - 1 < 0 && j - 1 < 0) {
            return true;
        } else if (i - 1 < 0) {
            return board[i][j - 1] !== 'X';
        } else if (j - 1 < 0) {
            return board[i - 1][j] !== 'X';
        } else {
            return board[i - 1][j] !== 'X' && board[i][j - 1] !== 'X';
        }
        
    }
};