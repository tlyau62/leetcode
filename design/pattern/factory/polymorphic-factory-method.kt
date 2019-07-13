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

// factory
abstract class ViewerFactory() {
    abstract fun createViewer(): Viewer
}

class TextViewerFactory: ViewerFactory() {
    override fun createViewer(): Viewer = TextViewer()
}

class PdfViewerFactory: ViewerFactory() {
    override fun createViewer(): Viewer = PdfViewer()
}

class HtmlViewerFactory: ViewerFactory() {
    override fun createViewer(): Viewer = HtmlViewer()
}

// service
class ViewerService(var viewerFactoryResolver: Map<String, ViewerFactory>) {   
    fun openFile(file: File) {
        viewerFactoryResolver[file.type]!!.createViewer().open();
    }
}

// main
fun main(args: Array<String>) {
    val depMap = mapOf(
        "txt" to TextViewerFactory(),
        "pdf" to PdfViewerFactory(),
        "html" to HtmlViewerFactory())
    var viewerService = ViewerService(depMap)
    
    viewerService.openFile(File("myhomepage", "txt"));
}
