// behaves like an iterator
// - support pause and resume
// - by not building an array containing all the values and returning them all at once
// - a generator yields the values one at a time
// - requires less memory and allows the caller to get started processing the first few values immediately
// - useful in dp algorithm, not to compute everything to step n starting from 0
// 
// ref:
// - https://en.wikipedia.org/wiki/Generator_(computer_programming)
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

(function () {
    /**
     * fib generator
     */
    function* fibonacci() {
        var fn1 = 0;
        var fn2 = 1;

        while (true) {
            const reset = yield fn1; // pause and return fn1
            if (reset) {
                fn1 = 0;
                fn2 = 1;
            } else {
                fn2 += fn1;
                fn1 = fn2 - fn1;
            }
        }
    }

    const generator = fibonacci();
    console.log(generator.next().value); // get fn1 and resume
    console.log(generator.next().value); // get fn1 and resume
    console.log(generator.next().value); // get fn1 and resume
})();
