// closure

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let count = init;

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
}
