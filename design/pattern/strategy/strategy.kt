// Strategies
abstract class BillingStrategy {
    abstract fun calPrice(rawPrice: Double): Double;
}

// no discount
class NormalBillingStrategy: BillingStrategy() {
    override fun calPrice(rawPrice: Double): Double = rawPrice;
}

// 50% discount
class DiscountBillingStrategy: BillingStrategy()  {
    override fun calPrice(rawPrice: Double): Double = rawPrice * 0.5;
}

// model
class Customer {
    private var _drinks: ArrayList<Double>;
    private var _strategy: BillingStrategy;

    constructor() {
        _drinks = ArrayList<Double>();
        _strategy = NormalBillingStrategy();
    }

    fun setStrategy(strategy: BillingStrategy) {
        _strategy = strategy;
    }

    fun addDrink(price: Double) {
        _drinks.add(_strategy.calPrice(price));
    }

    fun printBill() {
        println("Bill total: \$${_drinks.sum()}");
    }
}

// main
fun main(args: Array<String>) {
    var john = Customer();

    john.addDrink(100.0);
    john.setStrategy(DiscountBillingStrategy());
    john.addDrink(100.0);
    john.setStrategy(NormalBillingStrategy());
    john.addDrink(100.0);
    john.printBill();
}