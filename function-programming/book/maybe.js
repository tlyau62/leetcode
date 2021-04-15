const prop = require("./functions/prop");
const match = require("./functions/match");
const add = require("./functions/add");
const safeHead = require("./functions/safe-head");
const map = require("./functions/map");
const Maybe = require("./algebraic-struct/maybe");
const compose = require("./functions/compose");
const curry = require("./functions/curry");
const maybe = require("./functions/maybe");

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

/**
 * function maybe
 */
// getTwenty :: Account -> String
const getTwenty2 = compose(
  maybe("You're broke!", finishTransaction),
  withdraw(20)
);

result = getTwenty2({ balance: 200.0 });
// 'Your balance is $180.00'

result = getTwenty2({ balance: 10.0 });
// 'You\'re broke!'
