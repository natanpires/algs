export function isValidWalk(walk: string[]) {
  if (walk.length !== 10) return false;

  const walkHistory = {
    ns: 0,
    we: 0
  };

  for (const step of walk) {
    switch (step) {
        case 'n':
          walkHistory.ns += 1;
          break;
        case 's':
          walkHistory.ns -= 1;
          break;
        case 'w':
          walkHistory.we -= 1;
          break;
        case 'e':
          walkHistory.we += 1;
          break;
    }
  }
  
  return walkHistory.ns === 0 && walkHistory.we === 0;
}
