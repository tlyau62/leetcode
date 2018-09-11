// problem:
// https://leetcode.com/problems/rle-iterator/

// mind flow
// 1. just follow what the question asked
// 2. submit, fix bug => beat 100% of submission

/**
 * @param {number[]} A
 */
var RLEIterator = function (A) {
    this.A = A;
};

/** 
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function (n) {
    const A = this.A;
    let i = 0, cur_num = -1;

    while (n > 0 && A.length >= 2) {
        if (n <= A[i]) {
            cur_num = A[i + 1];
            A[i] -= n;
            n = 0;
            i += 2;
        } else {
            n -= A[i];
            A[i] = 0;
        }
        while (A[i] === 0) {
            this.A.splice(i, 2);
        }
    }

    // console.log(A);

    return cur_num;
};

/** 
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = Object.create(RLEIterator).createNew(A)
 * var param_1 = obj.next(n)
 */

const rt = new RLEIterator([784, 303, 477, 583, 909, 505]);
console.log(rt.next(130));
console.log(rt.next(333));
console.log(rt.next(238));
console.log(rt.next(87));
