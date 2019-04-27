# iteration abstration
```js
function some_algorithm() {
    /* some codes before */
    
    /* how to abstract this iteration about primes generation? */
    const primes = [];
    const count = 10;
    let cur = 2;

    while (primes.length < count) {
        for (let i = ~~Math.sqrt(cur); i >= 2; i--) {
            if (cur % i === 0) {
                cur++;
                i = ~~Math.sqrt(cur);
            }
        }

        primes.push(cur++);
    }

    /* above iteration dependent */
    for (const p of primes) {
        console.log(p);
    }

    /* some codes after */
}
```

# method 1: procedure parameterization
space: O(n), need extra space to save the primes result
```js
class Primes {
    allPrimes(count) {
        const results = [];
        let cur = 2;
        while (results.length < count) {
            for (let i = ~~Math.sqrt(cur); i >= 2; i--) {
                if (cur % i === 0) {
                    cur++;
                    i = ~~Math.sqrt(cur);
                }
            }
            results.push(cur++);
        }
        return results;
    }
}

function some_algorithm() {
    /* some codes before */
    
    /* above iteration dependent */
    const primes = new Primes();
        
    for (const p of primes.allPrimes(10)) {
        console.log(p);
    }

    /* some codes after */
}
```

# method 2: iterator and generator + procedure parameterization
space: O(1)
```js
class Primes {
    /**
     * Generator
     */
    allPrimes(count) {
        /**
         * Iterator
         */
        class PrimesIterator {
            constructor(count) {
                this.count = count;
                this.cur = 2;
            }
            hasNext() {
                return count > 0;
            }
            next() {
                for (let i = ~~Math.sqrt(this.cur); i >= 2; i--) {
                    if (this.cur % i === 0) {
                        this.cur++;
                        i = ~~Math.sqrt(this.cur);
                    }
                }
                count--;
                return this.cur++;
            }
        };

        return new PrimesIterator(count);
    }
}

function some_algorithm() {
    /* some codes before */
    
    /* above iteration dependent */
    const primes = new Primes();
    const primesIterator = primes.allPrimes(10);

    while (primesIterator.hasNext()) {
        console.log(primesIterator.next());
    }

    /* some codes after */
}
```
