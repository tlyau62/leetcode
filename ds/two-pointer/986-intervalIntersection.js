/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * problem: https://leetcode.com/problems/interval-list-intersections/description/
 * 
 * @param {Interval[]} A
 * @param {Interval[]} B
 * @return {Interval[]}
 */
var intervalIntersection = function (A, B) {
    const res = [];
    let a, b, ar, br;

    a = b = 0;
    ar = A[a];
    br = B[b];

    while (a < A.length && b < B.length) {
        if (ar.end < br.start) {
            // mutual exclusive
            ar = A[++a];
            continue;
        } else if (br.end < ar.start) {
            // mutual exclusive
            br = B[++b];
            continue;
        }

        if (ar.start < br.start) {
            if (ar.end < br.end) {
                res.push(new Interval(br.start, ar.end));
                br = new Interval(ar.end + 1, br.end);
                ar = A[++a];
            } else if (ar.end === br.end) {
                res.push(br);
                ar = A[++a];
                br = B[++b];
            } else {
                res.push(br);
                ar = new Interval(br.end + 1, ar.end);
                br = B[++b];
            }
        } else if (ar.start === br.start) {
            if (ar.end < br.end) {
                res.push(ar);
                br = new Interval(ar.end + 1, br.end);
                ar = A[++a];
            } else if (ar.end === br.end) {
                res.push(br);
                ar = A[++a];
                br = B[++b];
            } else {
                res.push(br);
                ar = new Interval(br.end + 1, ar.end);
                br = B[++b];
            }
        } else {
            if (ar.end < br.end) {
                res.push(ar);
                br = new Interval(ar.end + 1, br.end);
                ar = A[++a];
            } else if (ar.end === br.end) {
                res.push(ar);
                ar = A[++a];
                br = B[++b];
            } else {
                res.push(new Interval(ar.start, br.end));
                ar = new Interval(br.end + 1, ar.end);
                br = B[++b];
            }
        }
    }

    return res;
};