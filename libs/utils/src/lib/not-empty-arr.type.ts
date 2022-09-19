/**
 * This type take a guarantee of minimum single item in array
 */
export type NotEmptyArr<T> = [T, ...T[]];
