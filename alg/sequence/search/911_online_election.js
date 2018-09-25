/**
 * problem:
 * https://leetcode.com/problems/online-election/description/
 * 
 * @param {number[]} persons
 * @param {number[]} times
 *
 * 2 method:
 * 1. q: time O(1), but you need space: O(max(times))
 * 2. q: time O(lg n), with space: O(n)
 * 
 * key notes:
 * 1. find out the max of the array at each update,
 *    each time update 1 value in the array
 *    - example:
 *      [1, 5, 2, 8] => inc idx 1 / max idx 3
 *      [1, 6, 2, 8] => inc idx 3 / max idx 3
 *      [1, 9, 2, 8] max idx 2
 *    - naive O(nm) 
 *      do Math.max on each array => time O(nm), m = size of array
 *    - dp O(m)
 *      sub-prob: max1, max2, max3, ...
 *      solve for max1,
 *         then max2 by compare new data(update) to max1,
 *         then max3 by compare to max2
 * 2. binary search (non-exact solution)
 *    - example
 *      [1, 5, 10, 20, 25]
 *   - search for 12 => return 10
 *   - we know bsearch will finally converge to a single number x
 *   - if x is the target, then x is the ans
 *     if target > x, then ans must be < next element of x, so x is the ans
 *     if target < x, then ans must be < prev element of x, so x is the ans
 */
var TopVotedCandidate = function (persons, times) {

    this.L = [];
    this.T = times;

    // init this.L
    const map = new Map();
    const L = this.L;
    let person_f, leader_f;

    this.L.push(persons[0]);
    map.set(top(L), 1);

    for (let p = 1; p < persons.length; p++) {
        person_f = map.has(persons[p]) ? map.get(persons[p]) + 1 : 1;
        leader_f = map.get(top(L));

        // update freq
        map.set(persons[p], person_f);

        // set leader
        L.push(person_f >= leader_f ? persons[p] : top(L));
    }

    // console.log(L);

    function top(L) {
        return L[L.length - 1];
    }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {

    return bsearch(this.L, this.T, 0, this.L.length - 1, t);

    function bsearch(L, T, left, right, t) {

        if (left >= right) {
            if (t >= T[left]) {
                // t must < T[left + 1]
                return L[left];
            } else {
                // t must < T[left]
                return L[left - 1];
            }
        }

        const mid = ~~((left + right) / 2);

        if (t === T[mid]) {
            return L[mid];
        } else if (t < T[mid]) {
            return bsearch(L, T, left, mid - 1, t);
        } else {
            return bsearch(L, T, mid + 1, right, t);
        }

    }

};

/** 
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = Object.create(TopVotedCandidate).createNew(persons, times)
 * var param_1 = obj.q(t)
 */