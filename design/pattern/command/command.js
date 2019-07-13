"use strict";

/**
 * Invoker
 * - manage execution
 * - allow trigger condtition
 */
class Switch {
    constructor() {
        this._commands = [];
    }

    storeAndExecute(command) {
        this._commands.push(command);
        command.execute();
    }
}

/**
 * Receiver
 */
class Light {
    turnOn() { console.log('turn on') }
    turnOff() { console.log('turn off') }
}

/**
 * Command 1
 */
class FlipDownCommand {
    constructor(light) {
        this._light = light;
    }

    execute() {
        this._light.turnOff();
    }
}

/**
 * Command 2
 */
class FlipUpCommand {
    constructor(light) {
        this._light = light;
    }

    execute() {
        this._light.turnOn();
    }
}

var light = new Light();
var switchUp = new FlipUpCommand(light);
var switchDown = new FlipDownCommand(light);
var s = new Switch();

s.storeAndExecute(switchUp);
s.storeAndExecute(switchDown);