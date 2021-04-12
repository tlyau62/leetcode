const append = require("./functions/append");
const prop = require("./functions/prop");
const match = require("./functions/match");
const add = require("./functions/add");
const safeHead = require("./functions/safe-head");
const map = require("./functions/map");
const Maybe = require("./algebraic-struct/maybe");
const compose = require("./functions/compose");
const curry = require("./functions/curry");

/**
 * A Functor is a type that implements map and obeys some laws
 *
 * My first functor
 */
class Container {
  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Container(x);
  }
}

// (a -> b) -> Container a -> Container b
Container.prototype.map = function (f) {
  return Container.of(f(this.$value));
};

let result;

result = Container.of(2).map((two) => two + 2);
// Container(4)

result = Container.of("flamethrowers").map((s) => s.toUpperCase());
// Container('FLAMETHROWERS')

result = Container.of("bombs").map(append(" away")).map(prop("length"));
// Container(10)

/**
 * functor Maybe
 */
result = Maybe.of("Malkovich Malkovich").map(match(/a/gi));
// Just(True)

result = Maybe.of(null).map(match(/a/gi));
// Nothing

result = Maybe.of({ name: "Boris" }).map(prop("age")).map(add(10));
// Nothing

result = Maybe.of({ name: "Dinah", age: 14 }).map(prop("age")).map(add(10));
// Just(24)

/**
 * function map
 */
// streetName :: Object -> Maybe String
const streetName = compose(map(prop("street")), safeHead, prop("addresses"));

result = streetName({ addresses: [] });
// Nothing

result = streetName({ addresses: [{ street: "Shady Ln.", number: 4201 }] });
// Just('Shady Ln.')

/**
 * Return failure
 */
// withdraw :: Number -> Account -> Maybe(Account)
const withdraw = curry((amount, { balance }) =>
  Maybe.of(balance >= amount ? { balance: balance - amount } : null)
);

// This function is hypothetical, not implemented here... nor anywhere else.
// updateLedger :: Account -> Account
const updateLedger = (account) => account;

// remainingBalance :: Account -> String
const remainingBalance = ({ balance }) => `Your balance is $${balance}`;

// finishTransaction :: Account -> String
const finishTransaction = compose(remainingBalance, updateLedger);

// getTwenty :: Account -> Maybe(String)
const getTwenty = compose(map(finishTransaction), withdraw(20));

result = getTwenty({ balance: 200.0 });
// Just('Your balance is $180')

result = getTwenty({ balance: 10.0 });
// Nothing
