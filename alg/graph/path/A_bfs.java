// Algorithms by SCU, P. 106 (ch. 4)
// find shortest path with breath-first-search

import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;


// time: O(V + E)
// number of queue operations: 2V (V add + V remove)
// each edge is accessed once (digraph), twice (non-digraph)
public class A_bfs {

    public static int[] bfs(int[][] G, int s) {
        // distances from s to the rest vertices
        int[] dist = new int[G.length];

        // init distances for source & the rest vertices
        for (int i = 0; i < dist.length; i++) {
            dist[i] = -1;
        }
        dist[s] = 0;

        // main bfs
        Queue<Integer> Q = new LinkedList<>();
        Q.add(s);

        Integer u;
        while (!Q.isEmpty()) {
            u = Q.remove();

            // mark all adjacent v of u as visited
            for (int v : G[u]) {
                if (dist[v] < 0) {
                    dist[v] = dist[u] + 1;
                    Q.add(v);
                }
            }
        }

        return dist;
    }

    public static void main(String[] args) {
        // each edge = (u, v, weight = constant)
        int[][] edges = { { 1, 3, 4, 5 }, // S
                { 0, 2 }, // A
                { 1 }, // B
                { 0 }, // C
                { 0 }, // D
                { 0 } // E
        };
        int[] result = bfs(edges, 0);

        System.out.print(Arrays.toString(result));
    }
}