/**
 * problem: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let ptr = head;

    while (ptr !== null && ptr.next !== null) {
        while (ptr.next !== null && ptr.val === ptr.next.val) {
            ptr.next = ptr.next.next;
        }
        ptr = ptr.next;
    }

    return head;
};