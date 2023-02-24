const s = new Set<number>();
const res: number[] = [];
let total = 0;
let times = 0;

function mean(...numbers: number[]): string {
  return (numbers.reduce((acc, val) => acc + val, 0) / numbers.length).toFixed(2);
}

function median(numbers: number[]): string {
  let median = 0;
  let numSize = numbers.length;
  median = numSize % 2 === 0 ? (numbers[numSize / 2 - 1] + numbers[numSize / 2]) / 2 : numbers[(numSize - 1) / 2];
  return median.toFixed(2);
}

function depthFirstSearch(idx: number, n: number): void {
  if (total === n) {
    let num = 1;
    for (let i = 0; i < times; ++i) {
      num *= res[i];
    }
    s.add(num);
    return;
  }

  if (total > n) return;

  for (let i = idx; i <= n; ++i) {
    total += i;
    res[times++] = i;
    depthFirstSearch(i, n);
    total -= i;
    res[times--] = 0;
  }
}

function part(n: number) {
  depthFirstSearch(1, n);
  const r = Array.from(s).sort((a, b) => a - b);
  if (n <= 1) return "Range: 0 Average: 1.00 Median: 1.00"
  return `Range: ${Math.max(...r) - Math.min(...r)} Average: ${mean(...r)} Median: ${median(r)}`;
};

console.log(part(8)); // "Range: 17 Average: 8.29 Median: 7.50"
