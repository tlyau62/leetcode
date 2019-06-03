// interfaces
interface Subject {
    fun attach(observer: Observer);
    fun detach(observer: Observer);
    fun notifyToAll();
}

interface Observer {
    fun update();
}

// model
class Shop: Subject {
    private var _observerCollection: ArrayList<Observer>;
    private var _discount: Double;

    constructor() {
        _observerCollection = ArrayList<Observer>();
        _discount = 1.0;
    }

    fun setDiscount(discount: Double) {
        _discount = discount;
        notifyToAll();
    }

    override fun attach(observer: Observer) {
        _observerCollection.add(observer);
    }
    
    override fun detach(observer: Observer) {
        _observerCollection.remove(observer);
    }

    override fun notifyToAll() {
        _observerCollection.forEach(Observer::update);
    }
}

class Person: Observer {
    private var _name: String;

    constructor(name: String) {
        _name = name;
    }

    override fun update() {
        println("$_name: I receive the notification!");
    }
}

// main
fun main(args: Array<String>) {
    var shop = Shop();
    var john = Person("John");
    var mary = Person("Mary");
    var peter = Person("Peter");

    shop.attach(john);
    shop.attach(mary);
    shop.attach(peter);

    shop.setDiscount(0.4);
}