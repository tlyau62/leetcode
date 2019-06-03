/**
 * Simple factory method
 * - 著重避免到處製造新Object(Object instantiation), 而是統一在工廠(Factory)生產
 * - 用家(Client)只能透過工廠製作出想要的object
 *
 * reference
 * 1. http://teddy-chen-tw.blogspot.com/2013/08/factory-method-pattern.html
 * 2. https://carsonwah.github.io/factory-design-pattern.html
 * 3. https://chercher.tech/kotlin/factory-design-pattern-kotlin
 */
// model
abstract class Car {
    abstract fun drive();
}

class RedCar: Car() {
    override fun drive() {
        println("driving red car");
    }
}

class BlueCar: Car() {
    override fun drive() {
        println("driving blue car");
    }
}

// factory
class CarFactory() {
    fun createCarFromColor(color: String): Car? {                
        when (color) {
            "RED" -> return RedCar();
            "BLUE" -> return BlueCar();
            else -> return null;
    	}
    }
}

// main
fun main(args: Array<String>) {
    var factory = CarFactory();
    var blueCar = factory.createCarFromColor("BLUE");
    var redCar = factory.createCarFromColor("RED");
    var blackCar = factory.createCarFromColor("BLACK");
    
    blueCar?.drive() ?: println("no such car");
    redCar?.drive() ?: println("no such car");
    blackCar?.drive() ?: println("no such car");
}