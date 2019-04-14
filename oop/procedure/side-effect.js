/**
 * Side effect (modifies clause)
 * - if some inputs are modified, the procedure has a side effect
 * - if procedure has a side effect, it should document the modifies clause
 */
function add(a, e) {
    // Modifies: a
    // Effects: add e to the end of a
    a.push(e);
}

/**
 * Add an element to the end of an array (jsdoc)
 * @param {number[]} a 
 * @param {number} e 
 */
function add(a, e) {
    a.push(e);
}