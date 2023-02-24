export function persistence(num: number): number {
  return num.toString().length > 1 
    ? 1 + persistence(num.toString().split('').map(Number).reduce((acc, cur) => acc * cur))
    : 0;
}
