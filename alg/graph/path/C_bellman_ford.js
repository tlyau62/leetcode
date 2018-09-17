// Algorithms by SCU, p. 118 (ch. 4)
// find shortest path with bellman ford algorithm
//
// q1: the shortest path from any source node to any destination node
//     at most pass through all nodes => |V| - 1 edges
//  => this means the final distance update at destination 
//     needs updated at most |V| - 1 times, which propagated
//     from source to the destination
//  e.g. s: [A, 3], [B, 4], A: null, B: [A, -2]
// 
// q2: time: O(VE)
// propagation/update is done on the whole graph
// => each propagation/update access all |E| edges
// => number of propagation/update is |V - 1|
// => total O((V - 1)E) = O(VE)
//
// q3: not work with negative cycle
// => negative cycle: a -ve weight edge in a cycle
// => looping a negative cycle cause -ve infinity distance

function bellman_ford(G, s) {
    const dist = [];

    for (let i = 0; i < G.length; i++) {
        dist[i] = Infinity;
    }
    dist[s] = 0;

    let newDist;

    // q1: why do |V| - 1 times
    for (let i = 0; i < G.length - 1; i++) {
        for (const [v_id, v] of G.entries()) {
            for (const e of v) {
                newDist = dist[v_id] + e[1];
                if (newDist < dist[e[0]]) {
                    dist[e[0]] = newDist;
                }
            }
        }
    }

    return dist;
}

let edges = [
    [[1, 10], [7, 8]], // S
    [[5, 2]], // A
    [[1, 1], [3, 1]], // B
    [[4, 3]], // C
    [[5, -1]], // D
    [[2, -2]], // E
    [[5, -1], [1, -4]], // F
    [[6, 1]] // G
];
const result = bellman_ford(edges, 0);
console.log(result);