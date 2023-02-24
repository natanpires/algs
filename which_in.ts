export function inArray(a1: string[], a2: string[]): string[] {
  const data: string[] = [];
  for (const a of a2) {
    for (const b of a1) {
      if (a.includes(b) && !data.includes(b)) data.push(b);
    }
  }
  return data.sort();
}
