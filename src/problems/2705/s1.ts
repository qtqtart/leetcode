// recursive

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  if (obj === null) {
    return null;
  }
  if (typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const ans: Obj = [];
    for (const item of obj) {
      const v = compactObject(item as Obj);
      if (v) {
        ans.push(v);
      }
    }
    return ans;
  }

  const ans: Obj = {};
  for (const key in obj) {
    const v = compactObject(obj[key] as Obj);
    if (v) {
      ans[key] = v;
    }
  }
  return ans;
}
