/**
 *
 * sort + 3 cases
 * [[0,1],[0,100]]
 * [[1,3],[2,6]]
 * [[0,100], [2,6]]
 *
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    intervals = intervals.sort((i, j) => {
        let diff = i.start - j.start;
        if (diff !== 0) {
            return diff;
        }
        return i.end - j.end;
    });

    const res = [];
    let l, r, intPtr;

    l = 0;
    r = 1;

    while (l < intervals.length) {
        intPtr = new Interval(intervals[l].start, intervals[l].end);
        while (
            r < intervals.length &&
            (intervals[r].start <= intPtr.end || intervals[r].start === intPtr.start)) {

            if (intervals[r].end > intPtr.end) {
                intPtr.end = intervals[r].end;
            }

            r++;
        }
        l = r;
        r = l + 1;
        res.push(intPtr);
    }

    return res;
};