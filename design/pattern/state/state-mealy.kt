/**
 * Mealy state machine
 * - a Mealy machine is a finite-state machine whose output values are determined
 *   both by its current state and the current inputs
 * 
 * Example:
 * init state = Locked,
 * | Current State | Input | Next State | Output                                                      |
 * |---------------|-------|------------|-------------------------------------------------------------|
 * | Locked        | coin  | Unlocked   | Unlocks the turnstile so that the customer can push through |
 * | Locked        | push  | Locked     | None                                                        |
 * | Unlocked      | coin  | Unlocked   | None                                                        |
 * | Unlocked      | push  | Locked     | When the customer has pushed through, locks the turnstile   |
 * 
 * ref:
 * 1. https://en.wikipedia.org/wiki/Finite-state_machine
 * 2. https://en.wikipedia.org/wiki/Mealy_machine
 */
interface State {
    // transitional logic
    fun execute(context: Turnstile, input: String);
}

class Locked: State {
    override fun execute(context: Turnstile, input: String) {
        if (input == "coin") {
            println("the turnstile is unlocked");
            context.setState(Unlocked());
        } else if (input == "push") {
            println("the turnstile is already locked");
            context.setState(this);
        }
    }
}

class Unlocked: State {
    override fun execute(context: Turnstile, input: String) {
        if (input == "coin") {
            println("the turnstile is already unlocked");
            context.setState(this);
        } else if (input == "push") {
            println("the turnstile is locked");
            context.setState(Locked());
        }
    }
}

class Turnstile {
    private var _state: State;

    constructor() {
        _state = Locked();
    }

    fun setState(state: State) {
        _state = state;
    }

    fun next(input: String) {
        _state.execute(this, input);
    }
}

fun main(args: Array<String>) {
    val turnstile = Turnstile();

    turnstile.next("coin");
    turnstile.next("push");
    turnstile.next("push");
    turnstile.next("push");
    turnstile.next("coin");
    turnstile.next("coin");
    turnstile.next("coin");
}
