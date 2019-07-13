"use strict";

/**
 * Receiver
 */
class Light {
    constructor(name) {
        this.name = name;
    }

    turnOn() { console.log(this.name + ': turn on') }
    turnOff() { console.log(this.name + ': turn off') }
}

/**
 * Invoker
 */
class Scheduler {
    constructor() {
        this.tasks = [];
    }

    /**
     * Execute tasks on schedule
     */
    start() {
        const self = this;

        setInterval(function () {
            const remainTasks = [];

            for (const task of self.tasks) {
                if (Date.now() >= task.getDate()) {
                    task.execute();
                } else {
                    remainTasks.push(task);
                }
            }

            // javascript is async, single thread
            self.tasks = remainTasks;
        }, 1000);
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

/**
 * Command 1
 */
class FlipDownCommand {
    constructor(light, date) {
        this.light = light;
        this.date = date;
    }

    getDate() {
        return this.date;
    }

    execute() {
        this.light.turnOff();
    }
}

/**
 * Command 2
 */
class FlipUpCommand {
    constructor(light, date) {
        this.light = light;
        this.date = date;
    }

    getDate() {
        return this.date;
    }

    execute() {
        this.light.turnOn();
    }
}

const light1 = new Light('light1');
const light2 = new Light('light2');
const scheduler = new Scheduler();

scheduler.start();
scheduler.addTask(new FlipUpCommand(light1, Date.parse("01-01-2020")));
scheduler.addTask(new FlipDownCommand(light2, Date.parse("02-01-2020")));