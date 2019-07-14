/**
 * builder + fluent interface
 * - https://en.wikipedia.org/wiki/Fluent_interface
 */
data class File(
    var name: String = "",
    var type: String = "",
    var size: Int = 0) {
}

class FileBuilder {
    private val _file: File
    
    constructor() {
        _file = File()
    }
    
    fun setName(name: String): FileBuilder {
        _file.name  = name;
        return this;
    }
    
    fun setType(type: String): FileBuilder {
        _file.type  = type;
        return this;
    }
    
    fun setSize(size: Int): FileBuilder {
        _file.size  = size;
        return this;
    }
    
    fun build(): File {
        return _file;
    }
}

fun main() {
    var testFile = FileBuilder()
        .setName("test")
        .setType("txt")
        .setSize(10)
        .build()
	print(testFile)
}