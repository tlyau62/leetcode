# Interface (specification)
abstract the classes must implement the specified behaviors
- without this, how to make sure the classes have implemented the common behaviors?

```java
/* how to abstract the common fields and method? */
class Professor {
    void teach();
}

class Teacher {
    void teach();
    void learn();
}

class Student {
    void learn();
}
```

## problem of using inheritance
```java
abstract class Researcher {
    void research();
}

abstract class Scholar {
    void learn();
}

class Professor extends Researcher {
    @override
    void research() {};
}

// contradiction: Teacher is a Researcher and not a Researcher?
class Teacher extends Researcher, Scholar {
    @override
    void research() {};

    @override
    void learn() {};
}

class Student extends Scholar {
    @override
    void learn() {};
}
```

## implementing interface
```java
interface Researcher {
    void research();
}

interface Scholar {
    void learn();
}

class Professor implements Researcher {
    @override
    void research();
}

class Teacher implements Researcher, Scholar {
    @override
    void research();

    @override
    void learn();
}

class Student implements Scholar {
    @override
    void learn();
}
```