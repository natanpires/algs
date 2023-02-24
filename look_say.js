const lookSay = (number) => {
  number = number.toString().split('');
  return +number
    .reduce((acc, cur, i) => {
      if (cur === number[i - 1]) {
        return acc;
      }
      let counter = 1,
        next = i + 1;
      while (cur === number[next]) {
        counter += 1;
        next += 1;
      }
      return [...acc, counter, cur];
    }, [])
    .join('');
}
