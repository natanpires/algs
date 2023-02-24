/*
 * Fibonnaci with dynamic programming
 * Equation: Fibonnaci(n) = Fibonnaci(n-1) + Fibonnaci(n-2); for n > 1;
 * Explanation: If the solution is already memoized then get it from the memo.
 */

const memo: Record<number, number> = {};
const Fibonnaci = (x: number): number => {
  if (x in memo) return memo[x];
  const f = x <= 2
    ? 1
    : Fibonnaci(x-1)+Fibonnaci(x-2);
  memo[x] = f;
  return f;
}

console.log(Fibonnaci(0)); // 1
