// solve using min heap, always keep track of the min element among the k-list
// heap implementation modify from https://gist.github.com/tpae/54ec7371f947505967a2036b9c002428

class MinHeap {

    constructor(A) {
        this.A = A;
        this.heapSize = A.length;
    }

    parent(i) {
        return Math.floor(i / 2);
    }

    left(i) {
        return 2 * i + 1;
    }

    right(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        const A = this.A;
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }

    // bubble down
    heapify(i) {
        const { A, heapSize } = this;
        const l = this.left(i), r = this.right(i);
        let min = i;

        if (l < heapSize && A[l].key < A[min].key) {
            min = l;
        }

        if (r < heapSize && A[r].key < A[min].key) {
            min = r;
        }

        if (min !== i) {
            this.swap(min, i);
            this.heapify(min);
        }
    }

    build() {
        for (let i = this.parent(this.heapSize - 1); i >= 0; i--) {
            this.heapify(i);
        }
    }

    min() {
        return this.A[0];
    }

    extractMin() {
        if (this.heapSize <= 0) {
            throw "heap underflow";
        }

        const A = this.A;
        let min = A[0];

        A[0] = A[--this.heapSize];
        this.heapify(0);

        return min;
    }

    increaseKey(i, newKey) {
        const A = this.A;
        A[i].key = newKey;
        this.heapify(i);
    }

    sortExtract() {
        let result = [];
        while (this.heapSize > 0) {
            result.push(this.extractMin());
        }
        return result;
    }

}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let numCompletedList = 0;
    const minNums = [];

    // init minNums
    for (let i = 0; i < lists.length; i++) {
        if (!lists[i]) {
            numCompletedList++;
            continue;
        }

        minNums.push({ key: lists[i].val, listId: i });
    }

    // init min heap
    const minHeap = new MinHeap(minNums);
    let min, list, listPtr;
    listPtr = list = new ListNode(-1); // dumy node

    minHeap.build();
    while (numCompletedList < lists.length) {
        min = minHeap.min();
        listPtr.next = lists[min.listId]; // append min to result list

        lists[min.listId] = lists[min.listId].next; // update input list ptr
        listPtr = listPtr.next; // update result list ptr

        if (!lists[min.listId]) { // if this list is finished
            numCompletedList++;
            minHeap.extractMin(); // remove the root since no more update on this list
        } else {
            minHeap.increaseKey(0, lists[min.listId].val); // update the root key
        }
    }

    list = list.next; // remove this dummy key

    return list;
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

const input = [
    strToNodes('1 -> 4 -> 5'),
    strToNodes('1 -> 3 -> 4'),
    strToNodes('')];
const sol = mergeKLists(input);
const target = strToNodes('1 -> 1 -> 3 -> 4 -> 4 -> 5');
console.log(verify(sol, target));