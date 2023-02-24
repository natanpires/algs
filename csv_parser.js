/**
 * CSV Parser.  Takes a string as input and returns
 * an array of arrays (for each row).
 *
 * @param input String, CSV input
 * @param separator String, single character used to separate fields.
 *        Defaults to ","
 * @param quote String, single character used to quote non-simple fields.
 *        Defaults to "\"".
 */
function parseCSV(input, separator, quote) {
  separator = separator || ',';
  quote = quote || '"';

  // Create your implementation here
  const arr = [];
  const newLine = '\n';
  const sChar = '$\\';
  const quoteRegStr = sChar.includes(quote)
    ? '\\' + quote + '\\' + quote
    : quote + quote;
  const replaceRegEx = new RegExp(quoteRegStr, 'g');

  let tmp = [];
  let tempWord = '';
  let char = '';
  let pos;

  const replaceQuotes = (str) => {
    const self = str + '';
    let replaced = self.replace(replaceRegEx, quote);

    if (replaced[0] === quote) {
      replaced = replaced.slice(1);
    }

    if (replaced[replaced.length - 1] === quote) {
      replaced = replaced.slice(0, self.length - 1);
    }

    return replaced;
  };

  const pushResult = () => {
    arr.push(tmp);
    tmp = [];
  };

  const addChar = (i = 1, push = true) => {
    const part = input.slice(0, pos);
    tmp.push(replaceQuotes(part));
    if (push) {
      pushResult();
    }
    input = input.slice(pos + i);
  };

  while (input.length) {
    char = input[0];

    if (char === quote) {
      pos = input.indexOf(quote + separator, 1);

      if (pos === -1) {
        pos = input.indexOf(quote + newLine, 1);

        if (pos === -1) {
          pos = input.indexOf(quote, 1);
          addChar();
        } else {
          addChar(2); 
        }
      } else {
        addChar(2, false);
      }
    } else if (char === separator || char === newLine) {
      tmp.push(tempWord);
      tempWord = '';
      input = input.slice(1);
      if (char === newLine) {
        pushResult();
      }
    } else {
      tempWord += char;
      input = input.slice(1);
    }
  }

  if (tmp.length > 0) {
    tmp.push(tempWord);
    arr.push(tmp);
  }

  return arr.length === 0 ? [['']] : arr;
}
