// Class type based on generics.
interface ClassWithArgs<T, A extends any[]> extends Function {
  new (...args: A): T;
};
  
// Utility types for Path.

type IsAny<T> = unknown extends T ? ([keyof T] extends [never] ? false : true) : false;
type ExcludeArrayKeys<T> = T extends ArrayLike<any> ? Exclude<keyof T, keyof any[]> : keyof T;
type PathImpl<T, Key extends keyof T> = Key extends string
  ? IsAny<T[Key]> extends true
    ? never
    : T[Key] extends Record<string, any>
    ? `${Key}.${PathImpl<T[Key], ExcludeArrayKeys<T[Key]>> & string}` | `${Key}.${ExcludeArrayKeys<T[Key]> & string}`
    : never
  : never;
type PathImpl2<T> = PathImpl<T, keyof T> | keyof T;
  
// Convert a interface into a string type. e.g. "algs.a.b.c" | "algs.a.b"...
type Path<T> = keyof T extends string
  ? PathImpl2<T> extends infer P
    ? P extends string | keyof T
      ? P
      : keyof T
    : keyof T
  : never;
  
// Get types from a specific path.
type Choose<T extends Record<string | number, any>, K extends Path<T>> = K extends `${infer U}.${infer Rest}`
  ? Rest extends Path<T[U]>
    ? Choose<T[U], Rest>
    : never
  : T[K];
  
export type { ClassWithArgs, IsAny, Path, Choose };
