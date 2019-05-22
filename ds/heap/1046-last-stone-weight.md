```java
/**
 * problem: https://leetcode.com/problems/last-stone-weight/
 * Solution 1: heap
 */
class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> Q = new PriorityQueue<>((a, b) -> b - a);
        
        for (int i = 0; i < stones.length; i++) {
            Q.add(stones[i]);    
        }
        
        while (Q.size() > 1) {
            Q.add(Math.abs(Q.remove() - Q.remove()));
        }
        
        return Q.remove();
    }
}
```