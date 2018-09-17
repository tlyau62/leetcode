// Algorithms by SCU, p. 113 (ch. 4)
// find shortest path with dijkstra algorithm
//
// time: O(V lg V + E)
// similar to bfs => O(V + E)
// Q.remove() + Q.add() takes O(2 lg V) = O(lg V) on each vertex access => O(V lg V)
// each directed edge is access once => O(E)
//
// not work with negative edge, p. 117
// the weight -2 edge make the previous weight 4 edge shorter,
// ultimately become weight 2
// but, each edge is accessed once only
// solution: access each edge more than 1 times (Bellman-Ford algorithm)

import java.util.Arrays;
import java.util.Iterator;
import java.util.PriorityQueue;

public class B_dijkstra {
    private static int[] dijk(Integer[][][] G, int s) {
        // distances from s to the rest vertices
        int[] dist = new int[G.length];

        // init distances for source & the rest vertices
        for (int i = 0; i < dist.length; i++) {
            dist[i] = Integer.MAX_VALUE;
        }
        dist[s] = 0;

        // main dijkstra
        PriorityQueue<Integer> Q = new PriorityQueue<>((a, b) -> dist[a] - dist[b]);
        Q.add(s);

        Integer u;
        int newDist;
        while (!Q.isEmpty()) {
            u = Q.remove();
            for (Integer[] v : G[u]) {
                newDist = dist[u] + v[1];
                if (newDist < dist[v[0]]) {
                    dist[v[0]] = newDist;
                    Q.remove(v[0]);
                    Q.add(v[0]);
                }
            }
            
            // print current queue
            // System.out.println(Q);
        }

        return dist;
    }

    public static void main(String[] args) {
        Integer[][][] edges = { // (u, v, w)
                { { 1, 4 }, { 2, 2 } }, // A
                { { 2, 3 }, { 3, 2 }, { 4, 3 } }, // B
                { { 1, 1 }, { 3, 4 }, { 4, 5 } }, // C
                {}, // D
                { { 3, 1 } } // E
        };
        int[] dists = dijk(edges, 0);

        System.out.println(Arrays.toString(dists));
    }
}