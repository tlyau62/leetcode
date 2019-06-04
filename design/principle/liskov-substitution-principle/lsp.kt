class Rectangle {
    private var _width, _height: Int;

    fun getWidth() = _width;

    fun setWidth(width: Int) {
        _width = width;
    }

    fun getHeight() = _height;

    fun setHeight(height: Int) {
        _height = height;
    }
}

class Square: Rectangle {
    override fun setWidth(width: Int) {
        _height = _width = width;
    }

    override fun setHeight(height: Int) {
        _height = _height = height;
    }
}
