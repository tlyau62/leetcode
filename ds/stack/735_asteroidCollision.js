/**
 * mind flow:
 * 1. example: [1, 2, -5] => [-5]
 *    - both 1, 2 waits to be destroyed by the most recent asteroid
 *    - stack should be used
 * 2. think when collision start and what it causes (3 cases)
 * 3. draft alg
 * 4. test it with examples, see below
 * 5. no counter example => finalize the alg => submit
 * 
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const stack = [];

    for (const a of asteroids) {
        if (a > 0) {
            stack.push(a);
        } else {
            if (isEmpty(stack) || top(stack) < 0) {
                stack.push(a);
            } else {
                // collision starts
                while (stack.length > 0 && top(stack) > 0) {
                    // a destroyed the other
                    if (Math.abs(a) > top(stack)) {
                        stack.pop();
                        if (isEmpty(stack) || top(stack) < 0) {
                            stack.push(a);
                            break;
                        }
                    } else if (Math.abs(a) < top(stack)) {
                        // a is destroyed by other
                        break;
                    } else {
                        // both destroyed
                        stack.pop();
                        break;
                    }
                }
            }
        }
    }

    return stack;

    function top(stack) {
        return stack[stack.length - 1];
    }

    function isEmpty(stack) {
        return stack.length === 0;
    }

};

// test case
// [5,10,-5]
// [5,1,-5]
// [1,-5]
// [1,-5,1]
// [1,-5,6]
// [8, -8]
// [10, 2, -5]
// [-2, -1, 1, 2]
// [1,2,-2,-1]
// [1,-1,2,-2]
// [1,-2,3,-4]
// [-4,3,-2,1]
// [4,-3,2,-1]
// [5,4,3,2,1]