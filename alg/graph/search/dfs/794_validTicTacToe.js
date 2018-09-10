// /**
//  * valid game:
//  * #X piece === #O piece or #X piece === #O piece + 1
//  * X wins => #X piece === #O piece + 1
//  * O wins => #X piece === #O piece
//  *
//  * @param {string[]} board
//  * @return {boolean}
//  */
// var validTicTacToe = function (board) {

//     board = board.map(row => row.split(''));

//     let x_win, o_win;
//     let o_count, x_count;
//     let i, j;

//     x_win = o_win = false;
//     o_count = x_count = 0;
//     for (i = 0; i < board.length; i++) {
//         for (j = 0; j < board[i].length; j++) {
//             if (board[i][j] === 'X') {
//                 x_win = dfs(i, j, 'X', 1) || x_win;
//             } else if (board[i][j] === 'O') {
//                 o_win = dfs(i, j, 'O', 1) || o_win;
//             }
//         }
//     }

//     console.log('x_count:' + x_count + ' o_count:' + o_count + ' x_win:' + x_win + ' o_win:' + o_win);

//     if (x_count === o_count) {
//         return !x_win;
//     } else if (x_count === o_count + 1) {
//         return !o_win;
//     } else {
//         return false;
//     }

//     function dfs(i, j, cur_piece, cont) {

//         if (i < 0 || i >= board.length || j < 0 || j >= board[i].length
//             || board[i][j] !== cur_piece) {
//             return false;
//         }

//         if (board[i][j] === 'O') {
//             o_count++;
//         } else {
//             x_count++;
//         }

//         board[i][j] = 'N';

//         if (cont === 3) {
//             return true;
//         }

//         let res = dfs(i + 1, j, cur_piece, cont + 1) || // right
//             dfs(i, j + 1, cur_piece, cont + 1) || // bot
//             dfs(i - 1, j, cur_piece, cont + 1) || // left
//             dfs(i, j - 1, cur_piece, cont + 1); // top

//         // corner
//         if (isCorner(i, j)) {
//             res = res || dfs(i + 1, j - 1, cur_piece, cont + 1) || // bot-left
//                 dfs(i + 1, j + 1, cur_piece, cont + 1); // bot-right
//         }

//         return res;

//     }

//     function isCorner(i, j) {
//         return (i === 1 && j === 1) ||
//             (i === 0 && j === 0) ||
//             (i === 0 && j === board.length - 1) ||
//             (i === board.length - 1 && j === 0) ||
//             (i === board.length - 1 && j === board.length - 1);
//     }

// };

// // validTicTacToe(["O  ", "   ", "   "]);
// let res = validTicTacToe(["XOX", "OXO", "OOX"])
// console.log(res);