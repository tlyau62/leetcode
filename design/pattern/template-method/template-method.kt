abstract class Foo {
    // template method
    fun templateMethod() {
        method1();
        method2();
    }

    // to be overriden in child class
    fun method1() {
    }
    
    // to be defined in child class
    abstract fun method2() { 
    }
}