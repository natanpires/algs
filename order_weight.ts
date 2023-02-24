export function orderWeight(strng: string): string {
  const checkFFC = (val: string): number => val.split('').reduce((acc, cur) => acc + +cur, 0);
  return strng.split(' ').sort((a, b) => checkFFC(a) - checkFFC(b) || (a > b ? 1 : -1)).join(' ');
}
