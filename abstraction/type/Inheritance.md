# Abstract class
abstract the parent entity's properties
- describe the is-a relationship

```java
/* how to abstract the common fields and method? */

class MachineGun extends Gun {
    int range;
    int bullet;
    String spinspeed;

    void shoot() {
        System.writeln("bibibi");
    }
}

class SnipGun extends Gun {
    int range;
    int bullet;
    String scaleRatio;
    
    void shoot() {
        System.writeln("bombombom");
    }
}
```

## Inheritance + Abstract class
```java
abstract class Gun {
    int range;
    int bullet;

    abstract void shoot();
}

// MachineGun is a gun
class MachineGun extends Gun {
    String spinspeed;

    void shoot() {
        System.writeln("bibibi");
    }
}

// SnipGun is a gun
class SnipGun extends Gun {
    String scaleRatio;
    
    void shoot() {
        System.writeln("bombombom");
    }
}
```