
// Algorithms by SCU, p. 142 (ch. 5)
// huffman code (time: n lg n)

import java.util.Arrays;
import java.util.PriorityQueue;

public class A_huffman_code {

    static class Node {
        Node left, right;
        int id, freq;

        Node(int id, int freq, Node left, Node right) {
            this.id = id;
            this.freq = freq;
            this.left = left;
            this.right = right;
        }
    }

    private static String[] huffman(int[] f) {
        PriorityQueue<Node> Q = new PriorityQueue<>((a, b) -> a.freq - b.freq);

        for (int i = 0; i < f.length; i++) {
            Q.add(new Node(i, f[i], null, null));
        }

        Node i, j;
        while (Q.size() > 1) {
            i = Q.remove();
            j = Q.remove();
            Q.add(new Node(-1, i.freq + j.freq, i, j));
        }

        String[] scheme = new String[f.length];
        buildScheme(Q.remove(), scheme, "", "");

        return scheme;
    }

    private static void buildScheme(Node root, String[] scheme, String prefix, String bit) {
        if (root == null) {
            return;
        }

        prefix += bit;
        if (root.id >= 0) {
            scheme[root.id] = prefix;
        }
        buildScheme(root.left, scheme, prefix, "0");
        buildScheme(root.right, scheme, prefix, "1");
    }

    public static void main(String[] args) {
        int[] f = { 70, 3, 20, 37 }; // freq
        String[] scheme = huffman(f);
        System.out.println(Arrays.toString(scheme));
    }
}
