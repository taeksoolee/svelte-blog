export type  Nullable<T> = T | null;

export type OfArray<T> =  T extends Array<infer V> ? V : never;