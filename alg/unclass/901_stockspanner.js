/** 
 * problem
 * https://leetcode.com/problems/online-stock-span/description/
 *
 * related problem: next greater number
 * https://leetcode.com/problems/next-greater-element-i/
 *
 * mind flow:
 * 1. reminds me the question 496 on leetcode
 * 2. focus on key phase "starting from today and going backwards"
 * 3. consider 2 cases
 * - prices = [1, 2, 3, 4] => output [1, 2, 3, 4]
 *   - element 1 waits to be collected by any elements >= 1 (which is 2) with the sum frequency 2
 *   - element 2 waits to be collected by any elements >= 2 (which is 3) with the sum frequency 3
 * - prices = [3, 2, 1, 5] => output [1, 1, 1, 1]
 *   - how to calcuate for element 5? collect all previous prices with value <= 5
 * 4. time? O(n), just a variant question of 496
 * 
 */

var StockSpanner = function () {
    this.stack = [{ price: 0, freq: 0 }];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    const stack = this.stack;
    let sum = 0;

    while (price >= stack[stack.length - 1].price) {
        sum += stack.pop().freq;
    }
    stack.push({ price, freq: sum + 1 }); // 1 is the freq of current price

    return stack[stack.length - 1].freq;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = Object.create(StockSpanner).createNew()
 * var param_1 = obj.next(price)
 */

const ss = new StockSpanner();
[5, 5, 4, 4, 6, 6].map(p => ss.next(p))
    .forEach(a => console.log(a));

// test cases
// 100, 80, 60, 70, 60, 75, 85
// 10, 6, 4, 7
// 10, 6, 4, 8, 7
