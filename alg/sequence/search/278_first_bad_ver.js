// binary search: O(lg n)
// key prop: if version i is bad, then 1st bad lies between left to i
//           if version i is good, then 1st bad lies from i + 1 to right
// ---
// after thoughts:
// prevent mid index overflow: mid = start+(end-start)/2;

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        return bsearch(1, n);
    };

    function bsearch(left, right) {
        if (left === right) {
            return left;
        }

        const mid = Math.floor((left + right) / 2);

        if (isBadVersion(mid)) {
            return bsearch(left, mid);
        } else {
            return bsearch(mid + 1, right);
        }
    }
};
