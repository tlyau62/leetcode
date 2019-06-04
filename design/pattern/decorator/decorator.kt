// no decorator pattern
class FileReader {
    fun openFile() {};
}

class BufferedFileReader: FileReader {
    fun bufferFile() {};
}

class EncryptedBufferedFileReader: BufferedFileReader {
    fun encryptBufferedFile() {};
}

class EncryptedFileReader: FileReader {
    fun encryptFile() {};
}

// decorator pattern
class FileReader {
    fun openFile() {};
}

class BufferedFileReader: FileReader {
    private var _fileReader: FileReader;
    
    constructor(fileReader: FileReader) {
        _fileReader = fileReader;
    }

    fun bufferFile() {
        // _fileReader.openFile();
    };
}

class EncryptedFileReader: FileReader {
    private var _fileReader: FileReader;
    private var _bufferedFileReader: FileReader;
    
    constructor(fileReader: FileReader) {
        _fileReader = fileReader;
    }

    constructor(bufferedFileReader: BufferedFileReader) {
        _bufferedFileReader = bufferedFileReader;
    }

    fun encryptFile() {
        // _fileReader.openFile();
    };

    fun encryptBufferedFile() {
        // _bufferedFileReader.bufferFile();
    };
}