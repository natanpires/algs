export const range = (start: number, end: number, step = 1) => ({
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (start < end) {
      start += step;
      return { value: start, done: false };
    }
    return { done: true, value: end };
  },
});

const rng2_10 = range(2, 10);

console.log(
  Array.from(rng2_10),
  ...rng2_10,
); 
// [
  // 3, 4, 5,  6,
  // 7, 8, 9, 10
// ]
// 3 4 5 6 7 8 9 10
