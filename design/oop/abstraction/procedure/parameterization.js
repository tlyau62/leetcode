/**
 * Abstraction by parameterization
 * - abstract from the identity of the data by replacing them with parameters
 * - generalize modeules so that they can be used in more situations
 */
// parameterization
(function () {
    let a, b;

    a = 2;
    b = 4;

    console.log(squares(a, b)); // binding actuals a, b to formal parameters x, y

    function squares(x, y) {
        // x, y: formal parameters
        return x * x + y * y;
    }
})();

// no parameterization
(function () {
    let a, b;

    a = 2;
    b = 4;

    console.log(a * a + b * b);
})();


