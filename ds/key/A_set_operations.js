/**
 * set operations O(n)
 * reference: http://2ality.com/2015/01/es6-set-operations.html
 */
Set.prototype.union = function (set) {
    return new Set([...this, ...set]);
}

Set.prototype.intersects = function (set) {
    return new Set([...this].filter((e) => set.has(e)));
}

Set.prototype.minus = function (set) {
    return new Set([...this].filter((e) => !set.has(e)));
}

Set.prototype.isSubset = function (set) {
    return [...this].every((e) => set.has(e));
}

Set.prototype.equals = function (set) {
    return this.isSubset(set) && set.isSubset(this);
}

/**
 * testing
 */
const set1 = new Set([1, 4, 6, 8]);
const set2 = new Set([2, 4, 5, 9]);

console.log(set1.union(set2)); // [1, 2, 4, 5, 6, 8, 9]
console.log(set1.intersects(set2)); // [4]
console.log(set1.minus(set2)); // [1, 6, 8]
console.log(set1.equals(set2));

console.log(new Set([2, 4, 6, 8]).equals(new Set([4, 2, 8, 6])));
console.log(new Set([2, 4, 6, 8]).equals(new Set([4, 2, 8, 7])));