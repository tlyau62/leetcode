// model
abstract class Car {
    companion object {
        // static method
        fun factory(color: String) : Car? = when(color) {
            "RED" -> RedCar();
            "BLUE" -> BlueCar();
            else -> null;
        }
    }

    abstract fun drive()
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

// main
fun main(args: Array<String>) {
    var blueCar = Car.factory("BLUE");
    var redCar = Car.factory("RED");
    var blackCar = Car.factory("BLACK");
    
    blueCar?.drive() ?: println("no such car");
    redCar?.drive() ?: println("no such car");
    blackCar?.drive() ?: println("no such car");
}
