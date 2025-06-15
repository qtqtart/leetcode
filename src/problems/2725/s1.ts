type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], ms: number): Function {
  fn(...args);

  const timerId = setInterval(() => {
    fn(...args);
  }, ms);

  return () => {
    clearInterval(timerId);
  };
}
