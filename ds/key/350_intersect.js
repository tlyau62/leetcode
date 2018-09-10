/**
 * 2 pointers O(Max(n, m))
 * fastest: 52ms; this: 68ms;
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// method 1: hash table
// group: time, space O(n1 + n2)
// search: time, O(min(n1, n2))
// 
// method 2: sort
// sort: time O(n1 lg n1 + n2 lg n2) = O(n lg n), n = max(n1, n2)
// search: n1 lg n2 / n2 lg n1
var intersect = function (nums1, nums2) {
    const res = [];
    let map1 = new Map(), map2 = new Map();

    // group
    hash(nums1, map1);
    hash(nums2, map2);

    // search
    if (map2.size > map1.size) {
        const temp = map1;
        map1 = map2;
        map2 = temp;
    }

    let el_min, el1, el2;
    for (const [i, n] of map2.entries()) {
        el1 = map1.get(i);
        el2 = n;

        if (el1 > 0 && el2 > 0) {
            el_min = Math.min(el1, el2);
            while (el_min-- > 0) {
                res.push(i);
            }
        }
    }

    return res;

    function hash(nums, map) {
        let temp;
        for (const n of nums) {
            temp = map.get(n);
            if (temp === undefined) {
                map.set(n, 1);
            } else {
                map.set(n, temp + 1);
            }
        }
    }

};