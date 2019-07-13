open class FileReader() {
    open fun openFile(path: String) {
        println("opening $path");
    }
}

class BufferedFileReader: FileReader {
    private val _fileReader: FileReader;
    
    constructor(fileReader: FileReader) {
        _fileReader = fileReader;
    }

    // all methods of FileReader must be overriden
    override fun openFile(path: String) {
        _fileReader.openFile(path);
        bufferFile();
    }

    private fun bufferFile() {
        println("buffering the opened file");
    }
}

class EncryptedFileReader: FileReader {
    private val _fileReader: FileReader;
    
    constructor(fileReader: FileReader) {
        _fileReader = fileReader;
    }

    constructor(bufferedFileReader: BufferedFileReader) {
        _fileReader = bufferedFileReader;
    }

    // all methods of FileReader must be overriden
    override fun openFile(path: String) {
        _fileReader.openFile(path);

        // this if-case can be abstracted by strategy pattern        
		if (_fileReader is BufferedFileReader) {
			encryptBufferedFile();
		} else {
           	encryptFile();    
        }
    }

    private fun encryptFile() {
        println("encrypting the opened file");
    }

    private fun encryptBufferedFile() {
        println("encrypting the opened and buffered file");
    }
}

fun main(args: Array<String>) {
    val bufferedReader = BufferedFileReader(FileReader());
    val encryptedBufferedFileReader = EncryptedFileReader(bufferedReader);
    val encryptedFileReader = EncryptedFileReader(FileReader());
	val path = "c://test.pdf";
    
    bufferedReader.openFile(path);
    encryptedBufferedFileReader.openFile(path);
    encryptedFileReader.openFile(path);
}
