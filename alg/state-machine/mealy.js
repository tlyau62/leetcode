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
// template 1
(function () {
    class Turnstile {
        constructor(init) {
            this._state = init;
        }

        transit(input) {
            const state = this._state;

            if (state === 'locked') {
                if (input === 'coin') {
                    this._state = 'unlocked';
                    console.log('Unlocks the turnstile so that the customer can push through');
                } else if (input === 'push') {
                    this._state = 'locked';
                } else {
                    throw new Error('sth wrong');
                }
            } else if (state === 'unlocked') {
                if (input === 'coin') {
                    this._state = 'unlocked';
                } else if (input === 'push') {
                    this._state = 'locked';
                    console.log('When the customer has pushed through, locks the turnstile');
                } else {
                    throw new Error('sth wrong');
                }
            } else {
                throw new Error('sth wrong');
            }
        }
    }

    const turnstile = new Turnstile('locked');

    turnstile.transit('coin');
    turnstile.transit('push');
    turnstile.transit('push');
    turnstile.transit('push');
    turnstile.transit('coin');
    turnstile.transit('coin');
    turnstile.transit('coin');
})();

// template 2
(function () {
    class Turnstile {
        constructor(init) {
            this._state = init;
        }

        transit(input) {
            const transition = `${this._state}/${input}`;

            switch (transition) {
                case 'locked/coin':
                    this._state = 'unlocked';
                    console.log('Unlocks the turnstile so that the customer can push through');
                    break;
                case 'locked/push':
                    this._state = 'locked';
                    break;
                case 'unlocked/push':
                    this._state = 'locked';
                    console.log('When the customer has pushed through, locks the turnstile');
                    break;
                case 'unlocked/coin':
                    this._state = 'unlocked';
                    break;
                default:
                    throw new Error('sth wrong');
            }
        }
    }

    const turnstile = new Turnstile('locked');

    turnstile.transit('coin');
    turnstile.transit('push');
    turnstile.transit('push');
    turnstile.transit('push');
    turnstile.transit('coin');
    turnstile.transit('coin');
    turnstile.transit('coin');
})();

// template 3
(function () {
    class Turnstile {
        constructor(init) {
            this._state = init;
        }

        transit(input) {
            const transition = `${this._state}/${input}`;

            switch (transition) {
                case 'locked/coin':
                case 'unlocked/coin':
                    this._state = 'unlocked';
                    break;
                case 'locked/push':
                case 'unlocked/push':
                    this._state = 'locked';
                    break;
                default:
                    throw new Error('state not found');
            }

            this.output(transition);
        }

        output(transition) {
            switch (transition) {
                case 'locked/coin':
                    console.log('Unlocks the turnstile so that the customer can push through');
                    break;
                case 'unlocked/push':
                    console.log('When the customer has pushed through, locks the turnstile');
                    break;
            }
        }
    }

    const turnstile = new Turnstile('locked');

    turnstile.transit('coin');
    turnstile.transit('push');
    turnstile.transit('push');
    turnstile.transit('push');
    turnstile.transit('coin');
    turnstile.transit('coin');
    turnstile.transit('coin');
})();
