/**
 * At start, you create a simple Weapon class
 */
class Weapon {
    var name: String
    var damage: Int
    
    constructor(name: String, damage: Int) {
        this.name = name
        this.damage = damage
    }

    fun damage() {
        println("Create some damages with ${this.name}");
    }
}

/**
 * Then, you add the sword functionalities to this Weapon class
 */
class SwordWeapon {
    var name: String;
    var damage: Int;
    
    constructor(name: String, damage: Int) {
        this.name = name;
        this.damage = damage;
    }

    fun damage() {
        println("Create some damages with ${this.name}");
    }

    fun swing() {
        println("swinging a ${this.name}");
    }

    fun cut() {
        println("cutting with ${this.name}");
    }
}

/**
 * Finally, you add 2 more functionalities to the class.
 * Then, you abandon this class for 3 months.
 * Now, you want to remove the functionality of Gun.
 * But, can you recognize which methods belongs to Gun?
 * No, because the class is too detail.
 */
class RocketGunSwordWeapon {
    var name: String;
    var damage: Int;
    
    constructor(name: String, damage: Int) {
        this.name = name;
        this.damage = damage;
    }

    fun swing() {
        println("Swinging ${this.name}");
    }

    fun cut() {
        println("Cutting with ${this.name}");
    }

    fun fire() {
        println("Shooting with ${this.name}");
    }

    fun reload() {
        println("Loading ${this.name}");
    }

    fun refuel() {
        println("Refueling ${this.name}");
    }

    fun launch() {
        println("Launching ${this.name}");
    }
}

/**
 * So, you use interface to partition all the methods into groups.
 * Now, the 8 methods are abstracted into 4 main functionalities only (weapon, sword, gun, rocket).
 */
interface ISword {
    fun swing();
    fun cut();
}

interface IGun {
    fun fire();
    fun reload();
}

interface IRocket {
    fun refuel();
    fun launch();
}

class RocketGunSwordWeaponWithInterface: ISword, IGun, IRocket {
    var name: String;
    var damage: Int;
    
    constructor(name: String, damage: Int) {
        this.name = name;
        this.damage = damage;
    }

    fun damage() {
        println("Create some damages with ${this.name}");
    }

    override fun swing() {
        println("Swinging ${this.name}");
    }

    override fun cut() {
        println("Cutting with ${this.name}");
    }

    override fun fire() {
        println("Shooting with ${this.name}");
    }

    override fun reload() {
        println("Loading ${this.name}");
    }

    override fun refuel() {
        println("Refueling ${this.name}");
    }

    override fun launch() {
        println("Launching ${this.name}");
    }
}


fun main(args: Array<String>) {
    var weapon = RocketGunSwordWeaponWithInterface("Mystery", 1000);

    weapon.damage();
    weapon.swing();
    weapon.cut();
    weapon.fire();
    weapon.reload();
    weapon.refuel();
    weapon.launch();
}
