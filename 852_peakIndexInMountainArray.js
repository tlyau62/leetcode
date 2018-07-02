/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    return A.reduce((a, c, i) => {
        if (a === -1 || c > A[a]) {
            return i;
        }
        return a;
    }, -1);
};

let result;
result = peakIndexInMountainArray([0,1,0]);
console.log(result);