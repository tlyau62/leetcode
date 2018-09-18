// Algorithms by SCU, P. 132 (ch. 5)
// find minimum spanning tree using kruskal's algorithm
// with union find data structure
//
// not optimized on union find
// if optimized, time: O(V + E lg E) = O(E lg E)
// someone said O(E lg V) => https://stackoverflow.com/questions/20432801/time-complexity-of-the-kruskal-algorithm
//
// counting sort is applicable => time reduced to O(E)
// extra notes:
// https://www.quora.com/Why-cant-we-use-count-sort-as-a-general-purpose-sorting-algorithm

function kruskal(G) {
    const sets = [];

    // makeset, start from 1 vertex per set; O(V)
    for (let i = 0; i < G.length; i++) {
        sets[i] = i;
    }

    // sort edges; O(E lg E)
    const edges = [];
    for (let i = 0; i < G.length; i++) {
        for (const e of G[i]) {
            edges.push([i, ...e]); // (u, v, w)
        }
    }
    edges.sort((a, b) => a[2] - b[2]);

    // main kruskal; O(E)
    const X = []; // mst
    for (const e of edges) {
        const u_parent = find(e[0]),
            v_parent = find(e[1]);

        if (u_parent !== v_parent) {
            // union
            sets[u_parent] = v_parent;
            X.push(e);
        } else {
            // cycle occur, ignore
        }
    }

    return X;

    function find(v) {
        while (v !== sets[v]) {
            v = sets[v];
        }
        return v;
    }

}

const G = [
    [[1, 2], [2, 1]], // A
    [[0, 2], [2, 2], [3, 1]], // B
    [[0, 1], [1, 2], [3, 2], [4, 3]], // C
    [[1, 1], [2, 2], [4, 3], [5, 4]], // D
    [[2, 3], [3, 3], [5, 1]], // E
    [[3, 4], [4, 1]], // F
];
const mst = kruskal(G);
console.log(mst.reduce((a, e) => a + e[2], 0));