import getValueByKey from "./get-value-key";

type Compare = string | number | Date;

/**
 * Utility function to create custom compare function for sorting Arrays
 * @param coerceType Function to coerce the types of values
 * @param compareFn Compare function to apply to the values
 * @returns Custom compare function
 */
function createCompareFunction(
  coerceType: Function = String,
  compareFn: Function = (a: Compare, b: Compare, direction: number = 1) =>
    a < b ? -1 * direction : a > b ? 1 * direction : 0
): Function {
  function fn(a: Compare, b: Compare, direction: number = 1): number {
    const aVal = coerceType(a);
    const bVal = coerceType(b);

    return compareFn(aVal, bVal, direction);
  }

  fn.asc = (a: Compare, b: Compare) => fn(a, b, 1);
  fn.desc = (a: Compare, b: Compare) => fn(a, b, -1);

  fn.by = (key: string) => {
    const direction = key.charAt(0) === "-" ? -1 : 1;

    return function (a: Object, b: Object): number {
      const keyPath = key.charAt(0) === "-" ? key.slice(1) : key;

      const aVal = coerceType(getValueByKey(a, keyPath));
      const bVal = coerceType(getValueByKey(b, keyPath));

      return compareFn(aVal, bVal, direction);
    };
  };

  return fn;
}

export default createCompareFunction;
