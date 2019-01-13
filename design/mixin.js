/**
 * Mixin
 * A mixin provides functionality that is intended to be added to other objects
 * 
 * ref:
 * https://en.wikipedia.org/wiki/Mixin
 * http://usejsdoc.org/tags-mixin.html
 * https://javascript.info/mixins
 * https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
 * https://stackoverflow.com/questions/2582289/what-is-the-difference-between-a-mixin-and-the-decorator-pattern
 * 
 * @author Tsz Lam <tlyau62@gmail.com>
 */
(function () {
    'use strict';

    /**
     * Class representing a person.
     */
    class Person {
        constructor(name) {
            this.name = name;
        }
    }

    /**
     * Provide new methods for Person.
     * @mixin
     */
    const PersonMixin = {
        /**
         * Print person's name 
         */
        printName() {
            console.log(`My name is ${this.name}`);
        }
    }

    Object.assign(Person.prototype, PersonMixin);

    const peter = new Person('Peter');
    peter.printName();
})();

