/**
 * Exception with side effects
 * - if there are exceptions, it's likely the modification will happen
 *   only for some of them
 * - exactly what happens must be described in the effects section
 */
function add(a, e1, e2) {
    // Requires: a is array and e1, e2 are integer
    // Modifies: a
    // Effects: if a is null, throws NullException;
    //          if e1 is null, set a[2] to e2 and throws NullException;
    //          if e2 is null, set a[1] to e1 and throws NullException;
    //          else a[0] = e1 + e2
    if (a === null) {
        throw new NullException();
    } else if (e1 === null) {
        a[2] = e2;
        throw new NullException();
    } else if (e2 === null) {
        a[1] = e1;
        throw new NullException();
    } else {
        a[0] = e1 + e2;
    }
}