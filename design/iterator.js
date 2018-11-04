/**
 * ref:
 * - why iterator
 *   - return an iterator instead of the whole array when only read is needed
 * https://softwareengineering.stackexchange.com/questions/299347/iterator-pattern-why-is-it-important-to-not-expose-the-internal-representation
 *
 * - iterator pattern
 * https://en.wikipedia.org/wiki/Iterator
 * https://en.wikipedia.org/wiki/Iterator_pattern
 * http://www.dotspace.idv.tw/Jyemii/patternscolumn/articles/IteratorForJava.htm
 * 
 * - Iterators and Generators
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
 * 
 * - function*, yield*
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*
 * 
 * - iterator in java
 * https://docs.oracle.com/javase/7/docs/api/java/util/Iterator.html
 * 
 * - for-each loop in java
 * https://docs.oracle.com/javase/1.5.0/docs/guide/language/foreach.html
 * https://stackoverflow.com/questions/3328672/what-are-the-advantages-of-enhanced-for-loop-and-iterator-in-java
 * https://stackoverflow.com/questions/22267919/iterator-vs-for
 */
(function () {
    class Person {
        constructor(name, tasks) {
            this._name = name;
            this._tasks = tasks;
        }

        *viewTask() {
            yield* this._tasks.map(t => `task ${t}`);
        }
    }

    class Party {
        constructor() {
            this._personList = [];
        }

        addPerson(person) {
            this._personList.push(person);
        }

        /**
         * return an iterator of this._personList
         */
        *viewAllPeople() {
            yield* this._personList;
        }

        /**
         * return an iterator of this._personList with formated string
         */
        *viewAllPeopleFormated() {
            yield* this._personList.map(p => `This is ${p._name}`);
        }

        /**
         * return an iterator of this._personList, delegate task to another iterator
         */
        *viewAllPeopleComplex() {
            for (const p of this._personList) {
                for (const t of p.viewTask()) {
                    yield `${p._name} has ${t}`;
                }
            }
        }

        /**
         * return a general iterator
         */
        viewAllPeopleGeneral() {
            const self = this;
            let nextIndex = 0
            return {
                next() {
                    let result = {
                        value: null, done: true
                    };
                    if (nextIndex < self._personList.length) {
                        result.value = self._personList[nextIndex];
                        result.done = false;
                        nextIndex++;
                    }
                    return result;
                }
            };
        }
    }

    const party = new Party();

    party.addPerson(new Person('John', ['read book', 'write homework']));
    party.addPerson(new Person('Mary', ['play game']));
    party.addPerson(new Person('Tom', ['watch tv', 'play football']));

    // general iterator implementation
    let it = party.viewAllPeople();
    let result = it.next();
    while (!result.done) {
        console.log(result.value);
        result = it.next();
    }

    // party.viewAllPeople() always produce a iterator
    console.log([...party.viewAllPeople()]);
    console.log([...party.viewAllPeople()]);

    // same as a general iterator
    const iterator = party.viewAllPeople();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    // iterator can be used to format list
    console.log([...party.viewAllPeopleFormated()]);

    // composite iterator can be used
    console.log([...party.viewAllPeopleComplex()]);

})();