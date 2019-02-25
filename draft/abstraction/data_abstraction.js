/**
 * Data abstraction
 * - allow us to introduce new types of data objects
 * - class: a method of encapsulation
 *   - encapsulate related variables (instance var) as a grouped state and
 *   - methods that related to the state
 * - without encapsulation
 *   - every method/function can access to these state easily
 *   - similar states cannot be produced easily
 */
(function () {
    'use strict';

    /**
     * Person: a new data type / data unit
     */
    class Person {
        /**
         * constructor
         * - create a new grouped state and
         * - perform initialization
         */
        constructor(name, age) {
            // instance var/state: the only legit area for instance method to access
            this._name = name;
            this._age = age;
        }

        /**
         * setter
         * - if set for a prop, this prop is allowed to be change at run-time by the outer scope
         * - all method is either getter/setter
         * - must associate with the state at scope Person
         */
        setAge(age) {
            this._age = age;
        }

        /**
         * getter
         * - if set for a prop, this prop is allowed to be view at run-time by the outer scope
         * - all method is either getter/setter
         * - must associate with the state at scope Person
         */
        getName(name) {
            this._name = name;
        }

        /**
         * bad instance method
         * - a instance method is bad, if it is not associate with the scope Person
         * - solution: put to static method, or create a utilites class PersonUtil
         */
        doubleNumber(num) {
            return num * 2;
        }

        /**
         * class/static method
         * - not associate with the state at scope Person
         * - good place for any utilities/helper method
         * - if many utilities, consider to create a utilities class for Person, e.g. PersonUtil
         */
        static reverseString(str) {
            return str.split('').reverse().join('');
        }

        /**
         * bad class method
         * - a class method is bad, if it is associate with the scope Person
         * - solution: put back to instance method, and remove any instance variable
         */
        static formatPerson(person, id) {
            return `${id}: ${person._name} ${person._age}`;
        }
    }

})();


/**
 * Every variable alone can be a state as whole
 */
(function () {
    'use strict';

    class Num {
        constructor(val) {
            this._val = val;
        }

        /**
         * num
         */
        getVal() {
            return this._val;
        }

        /**
         * num = val
         */
        setVal(val) {
            this._val = val;
        }

        /**
         * num + val
         */
        add(val) {
            return this._val + val;
        }

        /**
         * num++
         */
        increment() {
            return this._val++;
        }

        /**
         * num.toString()
         */
        toString() {
            return this._val.toString();
        }
    }

    let num = new Num(10);

    num.increment();

    num.setVal(100);

    console.log(num.toString());
})();