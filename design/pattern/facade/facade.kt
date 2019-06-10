class SubsystemA {
    fun operationA1(): String {
        return "Subsystem A, Method A1\n";
    }


    fun operationA2(): String {
        return "Subsystem A, Method A2\n";
    }
}

class SubsystemB {
    fun operationB1(): String {
        return "Subsystem B, Method B1\n";
    }


    fun operationB2(): String {
        return "Subsystem B, Method B2\n";
    }
}

class SubsystemC {
    fun operationC1(): String {
        return "Subsystem C, Method C1\n";
    }


    fun operationC2(): String {
        return "Subsystem C, Method C2\n";
    }
}

class Facade {
    private val _a: SubsystemA;
    private val _b: SubsystemB;
    private val _c: SubsystemC;

    constructor() {
        _a = SubsystemA();
        _b = SubsystemB();
        _c = SubsystemC();
    }

    fun operation1() {
        println("Operation 1\n" +
            _a.operationA1() +
            _b.operationB1() +
            _c.operationC1());
    }

    fun operation2() {
        println("Operation 2\n" +
            _a.operationA2() +
            _b.operationB2() +
            _c.operationC2());
    }
}

fun main(args: Array<String>) {
    var facade = Facade();
    
    facade.operation1();
    facade.operation2();
}