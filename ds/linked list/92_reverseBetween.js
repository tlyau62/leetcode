/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    let left, right, right_next, dummy_head;

    // case when head needs to be replaced
    dummy_head = new ListNode(-1);
    dummy_head.next = head;
    head = dummy_head;
    m++;
    n++;

    // set left
    left = head;
    for (let i = 1; i < m - 1; i++) {
        left = left.next;
    }

    // set right
    right = left.next;
    for (let i = m; i < n; i++) {
        right_next = right.next;
        right.next = right_next.next; // point forward
        right_next.next = left.next; // point to beginning
        left.next = right_next; // update new beginning
    }

    // remove dummy_head
    return head.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let result;
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
result = reverseBetween(head, 2, 4);