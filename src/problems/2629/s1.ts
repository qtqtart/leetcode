// array

type F = (x: number) => number;

function compose(fns: F[]): F {
  return function (x) {
    let ans = x;
    for (let i = fns.length - 1; i >= 0; i--) {
      ans = fns[i](ans);
    }
    return ans;
  };
}
