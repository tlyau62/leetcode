/**
 * Problem:
 * There are 1 red ball and 5 white ball in the bag.
 * 2 Players draw them one by one without put the ball back,
 * who got the first red ball win the game.
 * What is the probability of winning the game of the player who draws the ball first?
 *          
 * game         p(first draw player wins)
 * 1            1 / 6
 * 2            (5 / 6) * (4 / 5) * (1 / 4) = 1 / 6
 * ...          1 / 6
 * 
 * game         p(second draw player wins)
 * 1            (5 / 6) * (1 / 5) = 1 / 6
 * 2            (5 / 6) * (4 / 5) * (3 / 4) * (1 / 3) = 1 / 6
 * ...          1 / 6
 * 
 * p(first draw player wins) = p(second draw player wins) = 1 / 6
 * So, they have equal chance of winning the game.
 * So, the ratio winning game between them is 1:1
 * 
 */

class Bag {
    constructor(redBalls, whiteBalls) {
        this.redBalls = redBalls;
        this.whiteBalls = whiteBalls;
    }

    total() {
        return this.redBalls + this.whiteBalls;
    }

    draw() {
        const pRed = this.redBalls / this.total();

        if (Math.random() < pRed) {
            this.redBalls--;
            return "redBall";
        }
        this.whiteBalls--;
        return "whiteBall";
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.wins = 0;
    }

    getName() {
        return this.name;
    }

    getWins() {
        return this.wins;
    }

    win() {
        this.wins++;
    }

    static printWins(firstPerson, secondPerson) {
        console.log(`${firstPerson.name} wins ${firstPerson.getWins()}`);
        console.log(`${secondPerson.name} wins ${secondPerson.getWins()}`);
        console.log(`ratio: ${firstPerson.getWins() / secondPerson.getWins()}`);
    }
}

class Game {
    constructor(firstPerson, secondPerson) {
        this.bag = new Bag(1, 5);
        this.firstPerson = firstPerson;
        this.secondPerson = secondPerson;
    }

    play() {
        const bag = this.bag;
        let currentPlayer = this.firstPerson;

        while (bag.total() > 0) {
            if (bag.draw() === "redBall") {
                currentPlayer.win();
                break;
            }

            currentPlayer = currentPlayer === this.firstPerson ? this.secondPerson : this.firstPerson;
        }
    }
}

const peter = new Person('peter'),
    john = new Person('john');
let game;

for (let i = 0; i < 1000000; i++) {
    game = new Game(peter, john);
    game.play();
}

console.log(peter.getWins() / 1000000);

// Person.printWins(peter, john);