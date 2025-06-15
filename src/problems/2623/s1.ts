// closure

type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  const map = new Map<string, number>();
  return function (...args) {
    const key = JSON.stringify(args);

    if (map.has(key)) {
      return map.get(key);
    }

    const res = fn(...args);
    map.set(key, res);
    return res;
  };
}
