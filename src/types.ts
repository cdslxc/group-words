type ValueOrArray<T> = T | ValueOrArray<T>[];
export type ParsedResult = ValueOrArray<string>;
