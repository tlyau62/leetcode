// model
data class File(val name: String, val type: String) {}

abstract class Viewer {
    companion object {
        // static method
        fun createViewer(type: String) : Viewer? = when(type) {
            "txt" -> TextViewer()
            "pdf" -> PdfViewer()
            "html" -> HtmlViewer()
            else -> null;
        }
    }
    
    abstract fun open()
}

class TextViewer: Viewer() {
    override fun open() {
        println("opening with ms office")
    }
}

class PdfViewer: Viewer() {
    override fun open() {
        println("opening with adobe viewer")
    }
}

class HtmlViewer: Viewer() {
    override fun open() {
        println("opening with chrome")
    }
}

// service
class ViewerService() {   
    fun openFile(file: File) {
        Viewer.createViewer(file.type)!!.open()
    }
}

// main
fun main(args: Array<String>) {
    var viewerService = ViewerService()
    
    viewerService.openFile(File("myhomepage", "txt"))
}
