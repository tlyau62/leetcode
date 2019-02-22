/**
 * Unchecked exception
 * - user is optional to provide the exception handling (javascript, C#)
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