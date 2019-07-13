// model
data class File(val name: String, val type: String) {}

abstract class Viewer {
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

class ViewerFactory {
    companion object {
        // static method
        fun createViewer(type: String) : Viewer? = when(type) {
            "txt" -> TextViewer()
            "pdf" -> PdfViewer()
            "html" -> HtmlViewer()
            else -> null
        }
    }
}

// service
class ViewerService() {   
    fun openFile(file: File) {
        ViewerFactory.createViewer(file.type)!!.open()
    }
}

// main
fun main(args: Array<String>) {
    var viewerService = ViewerService()
    
    viewerService.openFile(File("myhomepage", "txt"))
}
