/**
 * set operations
 * reference: http://2ality.com/2015/01/es6-set-operations.html
 */
// O(max(n,m))
Set.prototype.union = function (set) {
    return [...this, ...set];
}

// O(n)
Set.prototype.intersects = function (set) {
    return [...this].filter((e) => set.has(e));
}

// O(n)
Set.prototype.minus = function (set) {
    return [...this].filter((e) => !set.has(e));
}

/**
 * testing
 */
const set1 = new Set([1, 4, 6, 8]);
const set2 = new Set([2, 4, 5, 9]);

console.log(set1.union(set2)); // [1, 2, 4, 5, 6, 8, 9]
console.log(set1.intersects(set2)); // [4]
console.log(set1.minus(set2)); // [1, 6, 8]