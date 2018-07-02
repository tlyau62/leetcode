/**
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
var addTwoNumbers = function (l1, l2) {
    let result = null, result_ptr = null;
    let sum, sum_d, carry_d, l1Val, l2Val;
    while (l1 || l2) {
        l1Val = l1 ? l1.val : 0;
        l2Val = l2 ? l2.val : 0;
        sum = l1Val + l2Val;
        sum_d = sum % 10;
        carry_d = Math.floor((sum - sum_d) / 10);

        // add result digit
        if (!result) {
            result_ptr = result = new ListNode(sum_d);
        } else {
            result_ptr.next = new ListNode(sum_d);
            result_ptr = result_ptr.next;
        }

        // carry
        if (carry_d > 0) {
            if (l1 && l1.next) {
                l1.next.val += carry_d;
            } else if (l2 && l2.next) {
                l2.next.val += carry_d;
            } else if (l1) {
                l1.next = new ListNode(carry_d);
            } else if (l2) {
                l2.next = new ListNode(carry_d);
            } else {
                console.error('err');
            }
        }

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    return result;
};

function verify(sol, result) {
    // both lists have same val
    while (sol && result) {
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

function strToNodes(str) {
    const nums = str.split(' -> ');
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

const num1 = strToNodes('9 -> 9');
const num2 = strToNodes('1');
const sol = addTwoNumbers(num1, num2);
const target = strToNodes('0 -> 0 -> 1');

// const sol = strToNodes('7 -> 0 -> 8');
// const target = strToNodes('7 -> 0 -> 8');

console.log(sol);
console.log(target);
console.log(verify(sol, target));
