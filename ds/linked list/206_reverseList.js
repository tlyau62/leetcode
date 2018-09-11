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
var reverseList = function (head) {
    let left, right, right_next, dummy_head;

    if (head === null) {
        return null;
    }

    // add dummy node
    dummy_head = new ListNode(-1);
    dummy_head.next = head;
    head = dummy_head;

    // set left
    left = head;

    // set right
    right = left.next;
    while (right.next !== null) {
        right_next = right.next;
        right.next = right_next.next; // point forward
        right_next.next = left.next; // point to beginning
        left.next = right_next; // update new beginning
    }

    // remove dummy_head
    return head.next;
};