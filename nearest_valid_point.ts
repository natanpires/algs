const getAbs = (x: number): number => (x^(x>>31))-(x>>31);

const nearestValidPoint = (x: number, y: number, points: number[][]): number => {
  let minValue = Infinity, index = -1;
  for (const idx in points) {
    const [a, b] = points[idx];
    if (a === x || b === y) {
      const d = (getAbs(a-x)+getAbs(b-y));
      if (d < minValue) {
        minValue = d;
        index = +idx;
      }
    }
  }
  return index;
};

console.log(
  nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]])
); // 2
