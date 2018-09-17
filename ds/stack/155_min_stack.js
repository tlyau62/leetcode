/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.nor_stack = [];
    this.min_stack = []; // handle most rerent decreasing push num
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.nor_stack.push(x);
    if (this.min_stack.length === 0 || x <= this.min_stack[this.min_stack.length - 1]) {
        this.min_stack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let pop = this.nor_stack.pop();
    if (pop === this.min_stack[this.min_stack.length - 1]) {
        this.min_stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.nor_stack[this.nor_stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min_stack[this.min_stack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */