import type { Compare } from "./types";

import createCompareFunction from "./create-compare-fn";

/**
 * Combine multipe sorting functions in order.
 *
 * Example:
 *  [
 *    { name: "Alice", age: 32 },
 *    { name: "Bob", age: 45 },
 *    { name: "Alice", age: 28 },
 *  ].sort(combine([
 *    alphabetically.by("name"),
 *    numerically.by("age").desc
 *  ]))
 * =>
 *  [
 *    { name: "Alice", age: 32 },
 *    { name: "Alice", age: 28 },
 *    { name: "Bob", age: 45 },
 *  ]
 *
 * @param sortFns List of sorting functions
 * @returns
 */
function combine(sortFns: Array<Function>): Function {
  return function (a: Compare, b: Compare): number {
    if (sortFns.length === 1) {
      return sortFns[0](a, b);
    }

    const result = sortFns[0](a, b);
    if (result === 0) {
      return combine(sortFns.slice(1))(a, b);
    }
    return result;
  };
}

/**
 * Sorts arrays alphabetically (taking into account case)
 *
 * Example: ["bob", "Alice", "tom", "Candice"].sort(alphabetically)
 * => ["Alice", "Candice", "bob", "tom"]
 */
const alphabetically = createCompareFunction(String);

/**
 * Sorts arrays alphabetically (regardless of case)
 *
 * Example: ["bob", "Alice", "tom", "Candice"].sort(alphabeticallyBase)
 * => ["Alice", "bob", "Candice", "tom"]
 */
const alphabeticallyBase = createCompareFunction((val: string) =>
  String(val).toLowerCase()
);

/**
 * Sorts arrays chronologically
 *
 * Example: ["01-01-2001", "01-01-1970", "02-02-2002"].sort(chronologically)
 * => ["01-01-1970", "01-01-2001", "02-02-2002"]
 */
const chronologically = createCompareFunction((date: string) =>
  new Date(date).getTime()
);

/**
 * Sorts arrays numerically
 *
 * Example: [1, 2, 23, 30, 4].sort(numerically)
 * => [1, 2, 4, 23, 30]
 */
const numerically = createCompareFunction(Number);

export { combine, createCompareFunction };
export { alphabetically, alphabeticallyBase, chronologically, numerically };
