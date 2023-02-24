const resolver = (guess, solution) => {
  const getGuesses = (guess) => {
    const splitSolution = solution.split('');
    const splitGuess = guess.split('');

    const solutionCharsTaken = splitSolution.map((_) => false);

    const statuses = Array.from(Array(guess.length));

    splitGuess.forEach((letter, i) => {
      if (letter === splitSolution[i]) {
        statuses[i] = 'g';
        solutionCharsTaken[i] = true;
        return;
      }
    });

    splitGuess.forEach((letter, i) => {
      if (statuses[i]) return;

      if (!splitSolution.includes(letter)) {
        statuses[i] = 'b';
        return;
      }

      const indexOfPresentChar = splitSolution.findIndex(
        (x, index) => x === letter && !solutionCharsTaken[index]
      );

      if (indexOfPresentChar > -1) {
        statuses[i] = 'y';
        solutionCharsTaken[indexOfPresentChar] = true;
        return;
      } else {
        statuses[i] = 'b';
        return;
      }
    });

    return statuses;
  };

  const status = getGuesses(guess);

  return guess
        .split('')
        .map((_, i) => status[i])
        .join('')
}
