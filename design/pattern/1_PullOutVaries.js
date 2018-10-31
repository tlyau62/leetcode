/**
 * ref: HFS p.9
 * Design Principle: pull out what varies
 * - explain: Identify the aspects of your application that vary and separate them from what stays the same
 */

// problem: DuckTypeC should not have fly()
(function () {
    'use strict';

    class Duck {
        fly() {
            console.log('fly');
        }
    }

    class DuckTypeA extends Duck { }

    class DuckTypeB extends Duck { }

    // DuckTypeC should not have fly()
    class DuckTypeC extends Duck { }
})();


// solution: delegate varies to the behavior class
(function () {
    'use strict';

    class NoFlyBehavour {
        fly() {
            // no fly 
        }
    }

    class NormalFlyBehavour {
        fly() {
            console.log('fly')
        }
    }

    class Duck {
        constructor() {
            this.flyBehavour = null;
        }

        performFly() {
            this.flyBehavour.fly();
        }
    }

    class DuckTypeA extends Duck {
        constructor() {
            super();
            this.flyBehavour = new NormalFlyBehavour();
        }
    }

    class DuckTypeB extends Duck {
        constructor() {
            super();
            this.flyBehavour = new NormalFlyBehavour();
        }
    }

    class DuckTypeC extends Duck {
        constructor() {
            super();
            this.flyBehavour = new NoFlyBehavour();
        }
    }
})();