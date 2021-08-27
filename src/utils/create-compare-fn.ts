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
  /**
   * Compare function with coerced types and a direction (default = 1)
   * @param a
   * @param b
   * @param direction
   * @returns
   */
  function fn(a: Compare, b: Compare, direction: number = 1): number {
    const aVal = coerceType(a);
    const bVal = coerceType(b);

    return compareFn(aVal, bVal, direction);
  }

  /**
   * Helper fields for ascending and descending sorts
   * @param a
   * @param b
   * @returns
   */
  fn.asc = (a: Compare, b: Compare) => fn(a, b, 1);
  fn.desc = (a: Compare, b: Compare) => fn(a, b, -1);

  /**
   * Helper field for sorting an array of objects by a given key path
   * @param key
   * @returns
   */
  fn.by = (key: string) => {
    /**
     * Main compare function for sorting an array of objects by key
     * @param a
     * @param b
     * @param direction
     * @returns
     */
    function compareBy(a: Object, b: Object, direction: number = 1): number {
      const aVal = coerceType(getValueByKey(a, key));
      const bVal = coerceType(getValueByKey(b, key));

      return compareFn(aVal, bVal, direction);
    }

    /**
     * Helper fields for ascending and descending sorts
     * @param a
     * @param b
     * @returns
     */
    compareBy.asc = (a: Compare, b: Compare) => compareBy(a, b, 1);
    compareBy.desc = (a: Compare, b: Compare) => compareBy(a, b, -1);

    return compareBy;
  };

  return fn;
}

export default createCompareFunction;
