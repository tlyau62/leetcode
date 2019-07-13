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