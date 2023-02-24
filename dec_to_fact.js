export class G964 {

  private static l = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  public static dec2FactString = (nb = 1): string => {
    let str = '0', i = 2;
    while (nb) {
        str = G964.l[nb%i] + str;
        nb = Math.floor(nb / i);
        i++;
    };
    return str;
  }

  public static factString2Dec = (str: string): number => {
    const size = str.length;
    return str.split('').reduce((acc, cur, i) => +acc * (size - i) + G964.l.indexOf(cur), 0);
  }
}
