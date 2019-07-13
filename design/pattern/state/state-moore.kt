/**
 * Moore state machine
 * - a Moore machine is a finite-state machine whose output values are determined only
 *   by its current state
 * 
 * Anti-example (same locked state has 2 output):
 * init state = Locked,
 * | Current State | Input | Next State | Output                                                      |
 * |---------------|-------|------------|-------------------------------------------------------------|
 * | Locked        | coin  | Unlocked   | Unlocks the turnstile so that the customer can push through |
 * | Locked        | push  | Locked     | None                                                        |
 * | Unlocked      | coin  | Unlocked   | None                                                        |
 * | Unlocked      | push  | Locked     | When the customer has pushed through, locks the turnstile   |
 * 
 * Example (nice parser)
 * - https://en.wikipedia.org/wiki/Finite-state_machine#/media/File:Fsm_parsing_word_nice.svg
 * 
 * ref:
 * 1. https://en.wikipedia.org/wiki/Finite-state_machine
 * 2. https://en.wikipedia.org/wiki/Moore_machine
 */
interface State {
    // transitional logic
    fun transit(context: StateContext, input: String);
    
    // output depends on only current state
    fun output();
}

class Init: State {
    override fun transit(context: StateContext, input: String) {
        if (input == "n") {
            context.setState(CharN());
        } else {
            context.setState(Fail());
        }
    }

    override fun output() {
        println("init state");
    }
}

class Accept: State {
    override fun transit(context: StateContext, input: String) {
        if (input != "") {
            context.setState(Fail());
        }
    }

    override fun output() {
        println("\"nice\" is parsed successfully");
    }
}

class Fail: State {
    override fun transit(context: StateContext, input: String) {
        context.setState(Fail());
    }

    override fun output() {
        println("fail to parse \"nice\"");
    }
}

class CharN: State {
    override fun transit(context: StateContext, input: String) {
        if (input == "i") {
            context.setState(CharI());
        } else {
            context.setState(Fail());
        }
    }

    override fun output() {
        println("n is accepted");
    }
}

class CharI: State {
    override fun transit(context: StateContext, input: String) {
        if (input == "c") {
            context.setState(CharC());
        } else {
            context.setState(Fail());
        }
    }

    override fun output() {
        println("i is accepted");
    }
}


class CharC: State {
    override fun transit(context: StateContext, input: String) {
        if (input == "e") {
            context.setState(CharE());
        } else {
            context.setState(Fail());
        }
    }

    override fun output() {
        println("c is accepted");
    }
}


class CharE: State {
    override fun transit(context: StateContext, input: String) {
        if (input == "") {
            context.setState(Accept());
        } else {
            context.setState(Fail());
        }
    }

    override fun output() {
        println("e is accepted");
    }
}

class StateContext {
    private var _state: State;

    constructor() {
        _state = Init();
    }

    fun setState(state: State) {
        _state = state;
    }

    fun next(input: String) {
        _state.transit(this, input);
        _state.output();
    }
}

fun main(args: Array<String>) {
    val context = StateContext();
	val failContext = StateContext();
    
    context.next("n");
    context.next("i");
    context.next("c");
    context.next("e");
    context.next("");
    
    failContext.next("n");
    failContext.next("z");
}
