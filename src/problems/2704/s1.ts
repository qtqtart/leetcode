type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe(_val: any) {
      if (val === _val) {
        return true;
      } else {
        throw "Not Equal";
      }
    },
    notToBe(_val: any) {
      if (val !== _val) {
        return true;
      } else {
        throw "Equal";
      }
    },
  };
}
