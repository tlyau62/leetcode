// inspired by
// https://leetcode.com/problems/linked-list-cycle/discuss/44489/O(1)-Space-Solution

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {

    if (head === null) {
        return false;
    }

    let slow, fast;

    slow = head;
    fast = head.next;

    while (fast !== null) {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next && fast.next.next;
    }
    return false;
};