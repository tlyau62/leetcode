/**
 * Checked exception
 * - expecting the program NOT to crash if the procedure requires are not fullfilled
 *   - user is required to provide the exception handling
 */
public static int getInt(int[] nums, int i) {
    if (i < 0 || i >= nums.length) {
        throw new RuntimeException("invalid range access");
    }
    return nums[i];
}

/**
 * Unchecked exception
 * - expecting the program to crash if the procedure requires are not fullfilled
 *   - the error is caused by user faults
 * - uncheck should be used only if
 *   - use when context of use is local, or
 *   - the errors are proved can never occur, or
 *   - the checks are costly
 */
public static int getInt(int[] nums, int i) {
    if (i < 0 || i >= nums.length) {
        throw new ArrayIndexOutOfBounds();
    }
    
    return nums[i];
}
