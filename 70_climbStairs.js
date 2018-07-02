/**
 * @param {number} n
 * @return {number}
 */

// dp
var climbStairs = function (n) {

    if (n <= 2) {
        return n;
    }

    let a, b, temp;

    // base case
    a = 1;
    b = 2;

    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// divide conquer (mem limit exists)
var climbStairs_slow = function (n) {

    const map = new Map();
    let count = 1;
    solve(n, '', '');
    return count;

    function solve(len, pre, post) {
        let key;

        for (let l = 1, r; l < len; l++) {
            r = len - l;
            key = getKey(pre, l, r, post);

            if (map.has(key)) {
                continue;
            } else {
                map.set(key, true);
            }

            if (l > 2) {
                if (post.length > 0) {
                    solve(l, pre, `${r}_${post}`);
                } else {
                    solve(l, pre, `${r}`);
                }
            } else if (r > 2) {
                if (pre.length > 0) {
                    solve(r, `${pre}_${l}`, post);
                } else {
                    solve(r, `${l}`, post);
                }
            } else {
                count++;
            }
        }
    }

    function getKey(pre, l, r, post) {
        let key;
        if (pre.length > 0 && post.length > 0) {
            key = `${pre}_${l}_${r}_${post}`;
        } else if (pre.length > 0) {
            key = `${pre}_${l}_${r}`;
        } else if (post.length > 0) {
            key = `${l}_${r}_${post}`;
        } else {
            key = `${l}_${r}`;
        }
        return key;
    }

};


/**
 * n = 3
 * 
 * brute force (perm)
 * 1 1 1
 * 1 1 2 
 * 1 2 1
 * 1 2 2
 *
 * dc
 * 3 => (1,2), (2,1) => (1,1,1)
 * 4 => (1,3), (3, 1) => (1, 1, 2), (1, 2, 1), (1, 2, 1), (2, 1, 1) => (1, 1, 1, 1)
 * 4 => (1,3), (2, 2), (3, 1) => (1, 1, 2), (1, 2, 1), (1, 1, 1, 1), (1, 2, 1), (2, 1, 1)
 * 
 * dp
 * 1 => 1 (1)
 * 2 => 2 (1)
 * 3 => 1,2; 2,1; 1,1,1 (3)
 * 4 => 2,2; 1,2,1; 1,1,2; 2,1,1; 1,1,1,1 (5)
 * 
 */

let res;
res = climbStairs(4);
console.log(res);
