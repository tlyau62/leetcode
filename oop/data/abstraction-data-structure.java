/**
 * Data structure
 * - a class that enables efficient access and modification of data representations
 * - methods usually contain algorithm
 */
class IntSet {
    // OVERVIEW: IntSets are mutable, unbounded sets of integers.
    // A typical IntSet is {x1, ..., xn}

    public IntSet() {
        // EFFECTS: Initializes this to be empty.
    }

    public void insert(int x) {
        // MODIFIES: this
        // EFFECTS: Adds x to the elements of this, i.e. this_post = this + {x}.
    }

    public void remove(int x) {
        // MODIFIES: this
        // EFFECTS: Removes x from this, i.e. this_post = this - {x}.
    }

    public boolean isIn(int x) {
        // EFFECTS: If x is in this, returns true else returns false.
        return false;
    }

    public int size() {
        // EFFECTS: Returns the cardinality of this.
        return 0;
    }

    public int choose() throws EmptyException {
        // EFFECTS: If this is empty, throws EmptyException else
        // returns an arbitrary element of this.
    }
}