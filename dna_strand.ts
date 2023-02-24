export class Kata {
  
  private static memo: Record<string, string> = {
    'a': 't',
    't': 'a',
    'c': 'g',
    'g': 'c'
  };
  
  static dnaStrand(dna: string) {
    let instructions = '';

    for (const l of dna) {
      instructions += this.memo[l.toLowerCase()].toUpperCase();
    }
    
    return instructions;
  }
}
