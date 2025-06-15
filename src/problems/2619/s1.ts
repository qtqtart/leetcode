interface Array<T> {
  last(): T | -1;
}

Array.prototype.last = function () {
  const n = this.length;
  if (n === 0) {
    return -1;
  }
  return this[n - 1];
};
