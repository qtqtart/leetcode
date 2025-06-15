type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], ms: number): Function {
  const timerId = setTimeout(() => {
    fn(...args);
  }, ms);

  return () => {
    clearTimeout(timerId);
  };
}
