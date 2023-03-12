/**
 * This function categorizes transactions that are similar to other transactions
 * keeping the same order, target account and amount difference less than 1000.
 *
 * @param Array<Transactions> transactions
 * @returns Array<Transactions>
 */

const categorizeSimilarTransactions = (transactions) => {
  // Split the transactions into categorized and uncategorized transactions
  const categorized = transactions.filter((trx) => trx.category);
  const uncategorized = transactions.filter((trx) => !trx.category);

  for (const trx of uncategorized) {
    //  Extract similar transactions from the categorized transactions with the same target account
    //  and amount difference less than 1000
    const similarTransactions = categorized.filter(
      (t) =>
        t.targetAccount === trx.targetAccount &&
        Math.abs(t.amount - trx.amount) <= 1000
    );

    if (similarTransactions.length) {
      // Obtain the category with the smallest amount difference
      const getSmallestAmountDiff = similarTransactions.reduce((prev, curr) => {
        const prevDiff = Math.abs(prev.amount - trx.amount);
        const currDiff = Math.abs(curr.amount - trx.amount);

        return prevDiff < currDiff ? prev : curr;
      });

      // Assign the category to the transaction
      if (getSmallestAmountDiff.category)
        trx.category = getSmallestAmountDiff.category;
    }
  }

  return transactions;
};

console.log(
  categorizeSimilarTransactions([
    {
      id: 'a001bb66-6f4c-48bf-8ae0-f73453aa8dd5',
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: 350,
      time: '2021-04-10T10:30:00Z',
    },
    {
      id: 'bfd6a11a-2099-4b69-a7bb-572d8436cf73',
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -150,
      category: 'eating_out',
      time: '2021-03-12T12:34:00Z',
    },
    {
      id: '6359091e-1187-471f-a2aa-81bd2647210f',
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: 100,
      category: 'entertainment',
      time: '2021-01-12T08:23:00Z',
    },
    {
      id: 'a8170ced-1c5f-432c-bb7d-867589a9d4b8',
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -1690,
      time: '2021-04-12T08:20:00Z',
    },
  ])
);
