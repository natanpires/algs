export const sumOfIntervals = (intervals: Array<[number, number]>): number => {
  const toNumber = (arr: Array<number>): number => {
    let result = 0;
    for (let i = 0; i < arr.length - 1; i += 2) {
      result += (arr[i + 1] - arr[i]);
    }
    return result;
  }

  return toNumber(intervals.sort((a, b) => a[0] - b[0]).reduce<Array<number>>((acc, cur, i, arr) => {
    if (arr.length && arr[i - 1]) {
      if (cur[0] < acc[acc.length - 1]) {
        if (cur[1] >= acc[acc.length - 1]) {
          acc[acc.length - 1] = cur[1];
        }
      } else {
        acc.push(...cur);
      }
    } else {
      acc.push(...cur);
    }
    return acc;
  }, []));
}
