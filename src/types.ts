export type Compare =
  | string
  | number
  | Date
  | Record<string | number | symbol, any>;

export type CompareFunction = (
  a: Compare,
  b: Compare,
  direction?: number
) => number;

type SortFunctionAscDesc = CompareFunction & {
  asc: CompareFunction;
  desc: CompareFunction;
};
export type SortFunction = SortFunctionAscDesc & {
  by: (key: string) => SortFunctionAscDesc;
};
