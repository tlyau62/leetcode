/**
 * either use heap or merge function in sort or re-arrange ptr O(1) space
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let merged, p;

    if (!l1 || !l2) { // empty list
        if (!l1 && !l2) {
            return null;
        } else if (!l1) {
            return l2;
        } else if (!l2) {
            return l1;
        }
    } else if (l1.val < l2.val) { // select first element from l1
        merged = p = l1;
        l1 = l1.next;
    } else if (l1.val >= l2.val) { // select first element from l2
        merged = p = l2;
        l2 = l2.next;
    }

    // re-arrange ptr (both have nums)
    while (l1 && l2) {
        if (l1.val < l2.val) {
            p = p.next = l1;
            l1 = l1.next;
        } else {
            p = p.next = l2;
            l2 = l2.next;
        }
    }

    // re-arrange remaining
    while (l1) {
        p = p.next = l1;
        l1 = l1.next;
    }

    while (l2) {
        p = p.next = l2;
        l2 = l2.next;
    }

    return merged;
};

function strToNodes(str) {
    const nums = str.split(' -> ');

    if (nums[0] === '') {
        return null;
    }

    let list = null, ptr;

    for (const num of nums) {
        if (!list) {
            list = new ListNode(parseInt(num));
        } else {
            ptr = list;
            while (ptr.next) {
                ptr = ptr.next;
            }
            ptr.next = new ListNode(parseInt(num));
        }
    }

    return list;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function verify(sol, result) {
    // both lists have same val
    while (sol && result) {
        console.log(sol.val);
        if (sol.val !== result.val) {
            return false;
        }
        sol = sol.next;
        result = result.next;
    }

    // some remainig el in list
    if (sol || result) {
        return false;
    }

    return true;
}

const num1 = strToNodes('1 -> 2 -> 4');
const num2 = strToNodes('1 -> 3 -> 4');
const sol = mergeTwoLists(num1, num2);
const target = strToNodes('1 -> 1 -> 2 -> 3 -> 4 -> 4');
console.log(verify(sol, target));

// const num1 = strToNodes('');
// const num2 = strToNodes('1 -> 2');
// const sol = mergeTwoLists(num1, num2);
// const target = strToNodes('1 -> 2');
// console.log(verify(sol, target));

// const num1 = strToNodes('3');
// const num2 = strToNodes('1 -> 2');
// const sol = mergeTwoLists(num1, num2);
// const target = strToNodes('1 -> 2 -> 3');
// console.log(verify(sol, target));