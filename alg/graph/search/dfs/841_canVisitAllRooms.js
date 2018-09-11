/**
 * https://leetcode.com/problems/keys-and-rooms/description/
 * 
 * dfs on 1st room
 *
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    const visited = [];

    dfs(0);

    return visited.reduce((a, e) => a + e) === rooms.length || rooms.length === 1;

    function dfs(room) {
        if (visited[room]) {
            return;
        }

        visited[room] = true;

        const cur_room = rooms[room];
        for (let i = 0; i < cur_room.length; i++) {
            dfs(cur_room[i]);
        }
    }
};