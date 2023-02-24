type TInputOutput = boolean | number | string;

export const findTheNotFittingElement = (series: TInputOutput[]): TInputOutput | undefined => {
  const getRepeated = (arr: TInputOutput[]) => arr.filter((e, i) =>
    arr.indexOf(e) !== i
  )?.[0];

  const lowerCaseMatch = series.filter(e => !e.toString().match(/[A-Z]/));
  if (lowerCaseMatch.length === 1) return lowerCaseMatch[0];
  
  if (series.every(e => typeof e === "number")) {
    const hasNegative = series.find(e => Math.sign(+e) === -1);
    if (hasNegative) return hasNegative;
  }

  const repeated = getRepeated(series);
  if (repeated) return series.find(e => e !== repeated);

  const repeatedTypes = getRepeated(series.map(e => typeof e));
  if (repeatedTypes && !series.every(e => typeof e === repeatedTypes)) {
    return series.find(e => typeof e !== repeatedTypes);
  }
  
  const notString = series.filter(e => !e.toString().match(/[A-Za-z]/));
  if (notString.length === 1) return notString[0];
  
  const notEven = series.filter(e => +e % 2 !== 0);
  if (notEven.length === 1) return notEven[0];

  return series[0];
}
