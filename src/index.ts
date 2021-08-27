import createCompareFunction from "./utils/create-compare-fn";

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

// TODO: add shorthand aliases: alpha, chrono, num, ...?
// TODO: add `combine` utility function to combine sorts?
export { alphabetically, alphabeticallyBase, chronologically, numerically };
