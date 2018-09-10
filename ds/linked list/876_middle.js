/**
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
var middleNode = function (head) {
    let p1, p2;

    p1 = head;
    p2 = head && head.next;

    while (p2 !== null) {
        p1 = p1.next;
        p2 = p2.next === null ? p2.next : p2.next.next;
    }

    return p1;
};