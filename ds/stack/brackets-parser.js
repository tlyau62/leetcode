class Accumulator {
    constructor() {
        this._stack = [];
    }

    consume() {
        const stack = this._stack;
        let result = '';

        while (stack.length > 0 && this.top() !== '{') {
            result = stack[stack.length - 1] + result;
            stack.pop();
        }

        stack.length > 0 && stack.pop();

        return result;
    }

    top() {
        const stack = this._stack;

        return stack[stack.length - 1];
    }

    push(...els) {
        const stack = this._stack;

        stack.push(...els);
    }

    isEmpty() {
        return this._stack.length === 0;
    }
}

class Parser {
    constructor() {
        this._accumulator = new Accumulator();
    }

    parse(inputs) {
        const accumulator = this._accumulator;
        let result = '';

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i] === '}') {
                let temp = accumulator.consume();

                temp = this.process(temp);

                if (accumulator.isEmpty()) {
                    result += temp;
                } else {
                    accumulator.push(...temp.split(''));
                }
            } else if (inputs[i] === '{' || !accumulator.isEmpty()) {
                accumulator.push(inputs[i]);
            } else {
                result += inputs[i];
            }
        }

        return result;
    }

    process(result) {
        console.log(temp);
        return result;
    }
}

class ConfigParser extends Parser {
    process(result) {
        return result.toUpperCase();
    }
}

const parser = new ConfigParser();

console.log(parser.parse("asdf{qw{123}e{45{aaaa}6}r}1234{abcde}"));
