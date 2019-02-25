/**
 * Checked exception
 * - user is required to provide the exception handling at compile time (java)
 * - delegate the checking tasks to other module
 *   - these checking tasks usually are NOT under programmer control
 *
 * Unchecked exception
 * - user is optional to provide the exception handling (javascript, C#)
 * - check ALL reason which will cause the procedure to fail
 *   - these checking tasks usually are under programmer control
 */
// assume FileReader throws checked exception
public static void main(String[] args) {
    FileReader file;
    
    try {
        file = new FileReader("C:\\test\\a.txt"); // delegate the checking tasks to OS
        // continue...
    } catch (IOException ex) {
        // analyze the exception and do recovery...
    }
}

// assume FileReader throws unchecked exception (prevention + defensive programming)
public static void main(String[] args) {
    FileReader file;
    String filePath = "C:\\test\\a.txt";
    
    // maybe more errors need be checked
    if (isFileExists(filePath) && isFileHasReadPermission(filePath) && isFileCorrupted(filePath) && isFileUsing(filePath) && ...) {
        // continue...
    } else {
        // analyze the errors and do recovery...
    }
}
