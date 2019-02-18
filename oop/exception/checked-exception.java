import java.io.*; 

/**
 * Checked exception
 * - exceptions that are checked at compile time
 * - method must handle the exception or specify the exception using throws
 */
class Main { 
    public static void main(String[] args) throws IOException {
        // Effects: if file is not found, then throws IOException;
        //    else print the first three lines of the file

        FileReader file = new FileReader("C:\\test\\a.txt"); 
        BufferedReader fileInput = new BufferedReader(file); 
          
        // Print first 3 lines of file "C:\test\a.txt" 
        for (int counter = 0; counter < 3; counter++)  
            System.out.println(fileInput.readLine()); 
          
        fileInput.close(); 
    } 
} 