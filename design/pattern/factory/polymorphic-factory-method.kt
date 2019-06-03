// model
abstract class Document {
    abstract fun open();
}

class OfficeDocument: Document() {
    override fun open() {
        println("opening with ms office");
    }
}

class PdfDocument: Document() {
    override fun open() {
        println("opening with adobe viewer");
    }
}

class HtmlDocument: Document() {
    override fun open() {
        println("opening with chrome");
    }
}

class MarkdownDocument: Document() {
    override fun open() {
        println("opening with vscode");
    }
}

// factory
abstract class ViewerFactory() {
    abstract fun createViewer(type: String): Document?;
}

// default implementation
class DefaultViewerFactory: ViewerFactory() {
    override fun createViewer(type: String): Document? = when (type) {
        "doc", "docx" -> OfficeDocument();
        "pdf" -> PdfDocument();
        else -> null;
    }
}

// new implementation
class AdvancedViewerFactory: ViewerFactory() {
    override fun createViewer(type: String): Document? = when (type) {
        "doc", "docx" -> OfficeDocument();
        "pdf" -> PdfDocument();
        "html" -> HtmlDocument();
        "md" -> MarkdownDocument();
        else -> null;
    }
}

// main
fun main(args: Array<String>) {
    var isAdmin = true;
    var factory = if (isAdmin) AdvancedViewerFactory() else DefaultViewerFactory();
    var docViewer = factory.createViewer("doc");
    var htmlViewer = factory.createViewer("html");
    
    docViewer?.open() ?: println("no access right");
    htmlViewer?.open() ?: println("no access right");
}
