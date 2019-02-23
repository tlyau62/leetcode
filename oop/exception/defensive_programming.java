/**
 * Defensive Programming
 * - for robust program
 * - each procedure should be total
 * - use exception to handle in which the "usual" behavior cannot happen
 *   - throw unchecked exception (e.g. FailureException) when requires clause is not satistifed
 *   - headers of procedures should not list FailureException
 *   - procedure spec should not mention throw FailureException
 * - check should be disabled only if
 *   - the errors are proved can never occur, or
 *   - the checks are costly
 */
class Main {
    public static void main(String[] args) {        
        System.out.println(div(10, 0)); // no need try catch
    }

    /**
     * Divide a by b
     * @param a integer
     * @param b non-zero integer
     */
    static double div(int a, int b) {
        if (b == 0) {
            throw new FailureException();
        }
        
        return a / b;
    }
}