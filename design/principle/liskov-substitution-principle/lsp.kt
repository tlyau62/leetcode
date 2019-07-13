/**
 * An example of violation of lsp
 */
class Rectangle {
    private var _width, _height: Int;

    fun getWidth() = _width;

    /**
     * Invariant: _height is always unchanged
     */
    fun setWidth(width: Int) {
        _width = width;
    }

    fun getHeight() = _height;

    /**
     * Invariant: _width is always unchanged
     */
    fun setHeight(height: Int) {
        _height = height;
    }
}

class Square: Rectangle {
    /**
     * Violation on invariant: _height is unchanged
     */
    override fun setWidth(width: Int) {
        _height = _width = width;
    }

    /**
     * Violation on invariant: _width is unchanged
     */
    override fun setHeight(height: Int) {
        _height = _width = height;
    }
}
