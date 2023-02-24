export default function add(x?: number): number | any {
  let sum = x || 0;

  function f(y?: number) {
    sum += y || 0;
    return f;
  }

  f.toString = function() {
    return +sum;
  };

  return f;
}
