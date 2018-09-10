/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {

    // hash G
    const map = new Map();
    for (const g of G) {
        map.set(g);
    }

    // find connected components
    let consecCount, isContinue;

    consecCount = 0;
    isContinue = false;

    while (head != null) {
        if (!isContinue) {
            // wait for a starting connected node
            if (map.has(head.val)) {
                isContinue = true;
            }
        } else {
            // wait for a ending disconnected node
            if (!map.has(head.val)) {
                isContinue = false;
                consecCount++;
            }
        }

        head = head.next;
    }

    return consecCount + isContinue;
};