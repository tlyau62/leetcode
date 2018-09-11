/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
    const map = new Map();
    let hasOneLess, hasOneMore;
    let max = 0, cur_size;

    for (const n of nums) {

        if (map.has(n)) {
            continue;
        }

        hasOneLess = map.get(n - 1);
        hasOneMore = map.get(n + 1);

        if (hasOneLess && hasOneMore) {
            // just update the leftmost and rightmost num is enough
            // inspired by:
            // https://leetcode.com/problems/longest-consecutive-sequence/discuss/41055/My-really-simple-Java-O(n)-solution-Accepted
            cur_size = { len: 1 + hasOneLess.len + hasOneMore.len };
            map.set(n - hasOneLess.len, cur_size);
            map.set(n + hasOneMore.len, cur_size);
        } else if (hasOneLess) {
            hasOneLess.len++;
            cur_size = hasOneLess;
        } else if (hasOneMore) {
            hasOneMore.len++;
            cur_size = hasOneMore;
        } else {
            cur_size = { len: 1 };
        }

        map.set(n, cur_size);
        max = Math.max(max, cur_size.len);

    }

    return max;
};

// wrong:
// - a, b shares {len: 1}
// - c, d shares {len: 2}
// - e, f shares {len: 3}
// merge a, b, c, d with len = 5
// merge a, b, e, f with len = 10 => c, d wont update
var longestConsecutive3 = function (nums) {

    const map = new Map();
    let hasOneLess, hasOneMore;
    let max = 0;

    for (const n of nums) {

        hasOneLess = map.get(n - 1);
        hasOneMore = map.get(n + 1);

        if (map.has(n)) {
            // repeated number
            continue;
        }

        if (hasOneLess && hasOneMore) {
            // merge both seq
            hasOneLess.len += (1 + hasOneMore.len);
            hasOneMore.len = hasOneLess.len;
            map.set(n, hasOneLess);
            max = Math.max(max, hasOneLess.len);
        } else if (hasOneLess) {
            // inc current seq size
            hasOneLess.len++;
            map.set(n, hasOneLess);
            max = Math.max(max, hasOneLess.len);
        } else if (hasOneMore) {
            // inc current seq size
            hasOneMore.len++;
            map.set(n, hasOneMore);
            max = Math.max(max, hasOneMore.len);
        } else {
            // set new seq
            map.set(n, { len: 1 });
            max = Math.max(max, 1);
        }

        console.log(map);
    }

    return max;
};

// 1st try, O(n), n = numbers from min to max => not accepted
var longestConsecutive2 = function (nums) {

    // empty input check
    if (nums.length === 0) {
        return 0;
    }

    // get min max, set map
    const set = new Set();
    let min, max;

    min = Infinity;
    max = -Infinity;

    for (const n of nums) {
        set.add(n);
        if (n < min) {
            min = n;
        }
        if (n > max) {
            max = n;
        }
    }

    max += 2;
    set.add(max);

    // get longest consec seq
    let res_len, cur_len;

    res_len = cur_len = 1;

    for (let i = min + 1; i <= max; i++) {
        if (set.has(i)) {
            cur_len++;
        } else {
            if (cur_len > res_len) {
                res_len = cur_len;
            }
            cur_len = 0;
        }
    }

    return res_len;
};