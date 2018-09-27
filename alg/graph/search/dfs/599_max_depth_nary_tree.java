/**
 * problem:
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree
 */
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
    public int maxDepth(Node root) {    
        
        if (root == null) {
            // empty tree
            return 0;
        }
        
        int cur_max = 0;
        
        for (Node n: root.children) {
            cur_max = Math.max(cur_max, maxDepth(n));
        }
        
        return 1 + cur_max;
    }
}