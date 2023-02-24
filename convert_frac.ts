export const convertFrac = (lst: [number, number][]): string => {
  const getGCD = (a: number, b: number): number => !b ? ~~a : getGCD(b, a % b);
  const commonDenominator = lst.reduce((acc, cur) => (cur[1] * acc) / getGCD(cur[1], acc), 1);
  const lcommonDenominator = lst.reduce((acc, cur) => getGCD(acc, (cur[0] * commonDenominator) / cur[1]), commonDenominator);
  return lst.map((e) => `(${e[0] * commonDenominator/e[1]/lcommonDenominator},${commonDenominator/lcommonDenominator})`).join('');
}
