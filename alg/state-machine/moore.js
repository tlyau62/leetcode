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
// template 1
(function () {
    class NiceParser {
        constructor(init) {
            this._state = init;
        }

        // move from current state to the next state depend on input
        transit(input) {
            switch (this._state) {
                case 'init':
                    // this is the 2 arrow points
                    // - from init to n (accept n):
                    // - from init to reject (reject input)
                    this._state = input === 'n' ? 'n' : 'reject';
                    break;
                case 'n':
                    this._state = input === 'i' ? 'i' : 'reject';
                    break;
                case 'i':
                    this._state = input === 'c' ? 'c' : 'reject';
                    break;
                case 'c':
                    this._state = input === 'e' ? 'accept' : 'reject';
                    break;
                case 'accept':
                case 'reject':
                    this._state = 'reject';
                    break;
                default:
                    throw new Error('unknown state');
            }
        }

        output() {
            switch (this._state) {
                case 'init':
                    console.log('init');
                    break;
                case 'n':
                    console.log('n is accepted');
                    break;
                case 'i':
                    console.log('i is accepted');
                    break;
                case 'c':
                    console.log('c is accepted');
                    break;
                case 'accept':
                    console.log('this is a nice');
                    break;
                case 'reject':
                    console.log('this is not a nice');
                    break;
                default:
                    throw new Error('unknown state');
            }
        }
    }

    const parse = new NiceParser('init');

    parse.transit('n');
    parse.output();
    parse.transit('i');
    parse.output();
    parse.transit('c');
    parse.output();
    parse.transit('e');
    parse.output();

    const parse2 = new NiceParser('init');

    parse2.transit('n');
    parse2.output();
    parse2.transit('i');
    parse2.output();
    parse2.transit('c');
    parse2.output();
    parse2.transit('e');
    parse2.output();
    parse2.transit('e');
    parse2.output();

    const parse3 = new NiceParser('init');

    parse3.transit('n');
    parse3.output();
    parse3.transit('a');
    parse3.output();
    parse3.transit('a');
    parse3.output();
})();
