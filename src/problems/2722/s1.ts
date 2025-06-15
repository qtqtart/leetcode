// array

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const obj: Record<string, ArrayType> = {};

  for (const item of [...arr1, ...arr2]) {
    const key = item.id;
    if (key in obj) {
      Object.assign(obj[key], item);
    } else {
      obj[key] = item;
    }
  }

  return Object.values(obj);
}
