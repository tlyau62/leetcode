/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const newhead = new ListNode();
    newhead.next = head;
    
    let ptr, pptr;
    
    ptr = head;
    pptr = newhead;
    while (ptr !== null) {
        if (ptr.val === val) {
            pptr.next = ptr.next;
        } else {
            pptr = ptr;   
        }
        ptr = ptr.next;
    }
    
    return newhead.next;
};