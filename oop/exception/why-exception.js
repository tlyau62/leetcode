/**
 * Why exception? Exception propagation
 */
// Error handling: exception approach
(function () {
    main();

    // Main procedure
    function main() {
        try {
            taskA(1);
            taskB(0);
        } catch (ex) {
            mainErrorHandler(ex);
        }
    }

    // Exception collector
    function mainErrorHandler(ex) {
        console.log('error:' + ex.message);
    }

    function taskA(a) {
        taskSubA(a);
    }

    function taskSubA(a) {
        if (a === 1) {
            throw new Error('a should be non-one');
        }
    }

    function taskB(b) {
        if (b === 0) {
            throw new Error('b should be non-zero');
        }
    }
})();

// Error handling: special return value approach
(function () {
    main();

    // Main procedure
    function main() {
        let msg = '';

        msg = taskA(1);

        if (msg) {
            mainErrorHandler(msg);
            return;
        }

        msg = taskB(0);

        if (msg) {
            mainErrorHandler(msg);
            return;
        }
    }

    // Exception collector
    function mainErrorHandler(ex) {
        console.log('error:' + ex);
    }

    function taskA(a) {
        return taskSubA(a);
    }

    function taskSubA(a) {
        if (a === 1) {
            return 'a should be non-one';
        }
        return '';
    }

    function taskB(b) {
        if (b === 0) {
            return 'b should be non-zero';
        }
        return '';
    }
})();