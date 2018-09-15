// https://leetcode.com/problems/insertion-sort-list/description/
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
// hash linked list => sort like normal => link back the list
// space: O(n), time: O(n lg n)
var insertionSortList = function (head) {
    const map = [];

    while (head !== null) {
        map.push(head);
        head = head.next;
    }

    map.sort((a, b) => a.val - b.val);

    for (let i = 1; i < map.length; i++) {
        map[i - 1].next = map[i];
    }

    if (map.length === 0) {
        return null;
    } else {
        map[map.length - 1].next = null;
        return map[0];
    }
};