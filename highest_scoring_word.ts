export const high = (str: string): string => {
  const getPos = (char: string): number => 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) + 1;
  const sum = (word: string): number => word.split('').reduce((acc, cur) => acc + getPos(cur), 0);
  
  return str.split(' ').reduce((acc, cur) => sum(cur) > acc.value ?
      {
        string: cur,
        value: sum(cur)
      } : acc
  ,{
    string: '',
    value: 0
  }).string;
}
