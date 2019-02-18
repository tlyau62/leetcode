/**
 * Unchecked exception
 * - exceptions that are checked at run time
 * - exception handling is optional
 * - the header of a procedure should list all exceptions(unchecked/checked) it throws
 *   - reason: any exception that occur is of interest;
 *     without this info, you can't understand how to use the procedure
 */
class Main {
    public static void main(String[] args) throws ArithmeticException { // optional: throws ArithmeticException
        // Effects: if y is zero, then throws ArithmeticException;
        //    else print the result of x / y

        int x = 0;
        int y = 10;
        
        System.out.println(y / x);
    }
}