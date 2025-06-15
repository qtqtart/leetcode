type Fn<T> = () => Promise<T>;

function promiseAll<T>(fns: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const n = fns.length;
    const res = new Array(n).fill(null);
    let count = 0;

    fns.forEach((fn, i) => {
      fn()
        .then((r) => {
          res[i] = r;
          count++;

          if (n === count) {
            resolve(res);
          }
        })
        .catch((r) => {
          reject(r);
        });
    });
  });
}
