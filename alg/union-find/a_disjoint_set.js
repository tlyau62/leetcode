/**
 * generic, no optimization is done
 * 
 * ref:
 * https://en.wikipedia.org/wiki/Disjoint-set_data_structure
 */

function disjoint_sets(sets) {
    this.sets = sets;
};

// init set, O(n)
disjoint_sets.prototype.make_sets = function () {
    this.sets.forEach(s => s.parent = s);
};

// find the root element, O(1) in practice
disjoint_sets.prototype.find = function (s) {
    while (s !== s.parent) {
        s = s.parent;
    }
    return s;
};

// union 2 sets, O(1) in practice
disjoint_sets.prototype.union = function (s, t) {
    let rootS = this.find(s),
        rootT = this.find(t);

    if (rootS !== rootT) {
        rootS.parent = rootT;
    }
};

// optional: get the unioned set by the original set, O(n)
disjoint_sets.prototype.get = function (s) {
    const rootS = this.find(s);

    // same root = same set
    return this.sets.filter(set => this.find(set) === rootS);
};

/**
 * test
 */

// samples
const sets = [
    new Set([1, 2, 3]),
    new Set([4, 5, 6]),
    new Set([7, 8, 9])
];

// init
const ds = new disjoint_sets(sets);
ds.make_sets();

// union
ds.union(sets[0], sets[1]);

// output
console.log(ds.get(sets[0]));
