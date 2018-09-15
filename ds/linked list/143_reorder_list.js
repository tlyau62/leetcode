// problem: https://leetcode.com/problems/reorder-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// no memory restriction => use hash table, time & space: O(n)
var reorderList = function(head) {
    const map = [];
    
    while (head !== null) {
        map.push(head);
        head = head.next;
    }
    
    let left, right;
    
    left = 0;
    right = map.length - 1;
    
    while (left < right) {
        map[right].next = map[left].next;
        map[left].next = map[right];
        left++;
        right--
    }
    map[left] && (map[left].next = null);
};