/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {

    // first process input
    // similar to question 853_carFleet.js
    for (let i = 0; i < gas.length; i++) {
        gas[i] -= cost[i];
    }

    
    // fail: number of fail tries
    // succ: number of successful tries
    // cur: current car index
    // start: the solution
    // sum: sum of gas after input process
    let fail, succ, cur, start, sum;

    fail = succ = cur = start = sum = 0;

    // worst case: O(2n) = O(n)
    while (fail < gas.length && succ < gas.length) {
        sum += gas[cur];
        if (sum >= 0) {
            if (succ === 0) {
                start = cur;
            }
            succ++;
        } else {
            sum = succ = 0;
            fail++;
        }
        cur = (cur + 1) % gas.length;
    }

    return fail === gas.length ? -1 : start;
};