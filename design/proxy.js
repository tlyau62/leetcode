/**
 * ref:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */

/**
 * proxy a function
 */
(function () {
    const sum = (a, b) => a + b;
    const multiply2 = new Proxy(sum, {
        apply(target, self, args) {
            args[0] *= 2;
            args[1] *= 2;

            return target(...args);
        }
    });

    console.log(multiply2(1, 2));
})();

/**
 * proxy a method
 */
(function () {
    const obj = {
        num1: 1,
        num2: 2,
        sum() {
            return this.num1 + this.num2;
        }
    }
    const doubleSum = new Proxy(obj.sum, {
        apply(target, self, args) {
            obj.num1 *= 2;
            obj.num2 *= 2;
            return Reflect.apply(target, obj, []);
        }
    });

    console.log(doubleSum());
    console.log(obj);
})();

/**
 * proxy a property
 */
(function () {
    const obj = {
        num: 10,
        str: 'hihi'
    };

    const proxy = new Proxy(obj, {
        /**
         * @param target current is obj
         * @param property current is num
         * @param receiver current is proxy
         */
        get(target, prop, receiver) {
            if (prop === 'num') {
                return `num is ${target.num}`;
            } else {
                return Reflect.get(...arguments); // Reflect.get signiture: Reflect.get(target, propertyKey[, receiver])
            }
        }
    });

    console.log(proxy.num);
    console.log(proxy.str);
})();
