export function narcissistic(value: number): boolean {
  const stringValue = value.toString();
  return stringValue.split('').map(e => +e)
    .map(n => Math.pow(n, stringValue.length))
    .reduce((acc, cur) => acc + cur, 0) === value;
}
