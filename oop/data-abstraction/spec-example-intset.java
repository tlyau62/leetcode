/**
 * IntSet
 * - since a constructor always modifies this (initialization), we don't bother to indicate the modification in the modifies clause
 * - this_post indicate the value of this when the operation returns
 * - mutatators(with modifies clause) vs observers(without modifies clause)
 * - EmptyException is unchecked
 *   - because preventation can be done by checking size (under programmer control)
 */
public class IntSet {
    // OVERVIEW: IntSets are mutable, unbounded sets of integers.
    // A typical IntSet is {x1, ..., xn}

    // constructors
    public IntSet() {
        // EFFECTS: Initializes this to be empty.
    }

    // methods
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
    }

    public int size() {
        // EFFECTS: Returns the cardinality of this.
    }

    public int choose() throws EmptyException {
        // EFFECTS: If this is empty, throws EmptyException else
        // returns an arbitrary element of this.
    }
}