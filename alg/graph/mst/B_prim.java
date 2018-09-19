// Algorithms by SCU, P. 139 (ch. 5)
// find minimum spanning tree using prim's algorithm (greedy)
// similar to dijkstra's algorithm
//
// time: O(V lg V + E)

import java.util.Arrays;
import java.util.Iterator;
import java.util.PriorityQueue;

public class B_prim {

    private static int[] prim(Integer[][][] G, int s) {

        int[] dist = new int[G.length]; // distances from current bst to the rest vertices
        boolean[] visited = new boolean[G.length]; // need for undirected graph

        // init distances for source & the rest vertices
        for (int i = 0; i < dist.length; i++) {
            dist[i] = Integer.MAX_VALUE;
            visited[i] = false;
        }
        dist[s] = 0;
        visited[s] = true;

        // main prim
        PriorityQueue<Integer> Q = new PriorityQueue<>((a, b) -> dist[a] - dist[b]);
        Q.add(s);

        Integer u;
        while (!Q.isEmpty()) {
            u = Q.remove();
            visited[u] = true;

            for (Integer[] v : G[u]) {
                if (!visited[v[0]] && v[1] < dist[v[0]]) {
                    dist[v[0]] = v[1];
                    Q.remove(v[0]);
                    Q.add(v[0]);
                }
            }

            // print current queue
            System.out.println(Q);
        }

        return dist;
    }

    public static void main(String[] args) {
        Integer[][][] G = { // (u, v, w)
                { { 1, 2 }, { 2, 1 } }, // A
                { { 0, 2 }, { 2, 2 }, { 3, 1 } }, // B
                { { 0, 1 }, { 1, 2 }, { 3, 2 }, { 4, 3 } }, // C
                { { 1, 1 }, { 2, 2 }, { 4, 3 }, { 5, 4 } }, // D
                { { 2, 3 }, { 3, 3 }, { 5, 1 } }, // E
                { { 3, 4 }, { 4, 1 } }, // F
        };

        int[] dists = prim(G, 0);

        System.out.println(Arrays.toString(dists));
    }
}