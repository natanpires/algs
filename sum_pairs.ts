export function sumPairs(ints: number[], s: number): [number, number] | void {
  if (ints.length <= 1) return;
  const set = new Set();

  for (const cur of ints) {
    const value = s - cur;
    if (set.has(value)) return [value, cur];
    set.add(cur);
  }
}
                
