const pyramid = (size: number): string => {
    let i = 1, finalString = '\n';

    do {
        // Spacing (size - quantity of ascii).
        let str = ' '.repeat(size - i);
        // Quantity of ascii chars (always a odd and - 1 to begin with just one).
        let str2 = '*'.repeat(i * 2 - 1);
        // Append to our initial string to create an final result.
        finalString += `${str}${str2}${str}\n`;
        // Sum up our indicator.
        i++;
    } while (size >= i);

    return finalString;
}

console.debug(
    pyramid(10)
);
