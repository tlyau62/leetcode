/**
 * Mixin
 * A mixin provides functionality that is intended to be added to other objects
 * 
 * ref:
 * https://en.wikipedia.org/wiki/Mixin
 * http://usejsdoc.org/tags-mixin.html
 * https://google.github.io/styleguide/jsguide.html
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

