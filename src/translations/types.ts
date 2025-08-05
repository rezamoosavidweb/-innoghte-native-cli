/* eslint-disable @typescript-eslint/no-explicit-any */

export type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (number | string)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`
  >;
}[keyof TObj & (number | string)];

type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string,
> = TValue extends any[]
  ? Text
  : TValue extends object
    ? `${Text}${RecursiveKeyOfInner<TValue>}` | Text
    : Text;

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (number | string)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `.${TKey}` | `['${TKey}']`
  >;
}[keyof TObj & (number | string)];


