/**
 * Specifications for exception
 * 
 * effects clause must define
 * - what causes the procedure to terminate with each exception, and
 * - what is its behavior is in each case
 * 
 * the constraints in requires clause can be eliminated by exception
 * - if a procedure throws an exception for a certain subset of arguments,
 *   then that subsets should be excluded in the requires clause
 * 
 * procedure header should list all (unchecked & checked) exceptions it throws
 * - reason: any exception that occur is of interest (without this info, you can't understand how to use the procedure)
 */
function search(a, x) {
    // Requires: a is sorted
    // Effects: if a is null, throws NullPointerException;
    //    else if x is not in a, throws NotFoundException;
    //    else returns i such that a[i] = x.
}

 function fact(n) {
    // Effects: if n is negative, then throws NegativeException, else
    //    returns the factorial of n
}
