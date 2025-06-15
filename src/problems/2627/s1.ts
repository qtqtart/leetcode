type F = (...args: number[]) => void;

function debounce(fn: F, ms: number): F {
  let timerId: NodeJS.Timeout;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn(...args);
    }, ms);
  };
}
