type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, ms: number): Fn {
  return async (...args: any[]) => {
    const promise = fn(...args);
    const timeout = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, ms);
    });

    return Promise.race([promise, timeout]);
  };
}
