const append = require("./functions/append");
const prop = require("./functions/prop");

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
