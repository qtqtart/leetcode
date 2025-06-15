// array

interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>;
}

Array.prototype.groupBy = function (fn) {
  const obj: Record<string, any> = {};

  this.forEach((item) => {
    const key = fn(item);

    if (key in obj) {
      obj[key].push(item);
    } else {
      obj[key] = [item];
    }
  });
  return obj;
};
