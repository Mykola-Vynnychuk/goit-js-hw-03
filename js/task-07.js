//  Напиши сценарій керування особистим кабінетом інтернет-банку.
//  Є об'єкт account в якому необхідно реалізувати методи для роботи
//з балансом та історією транзакцій.

const Transaction = {
  // Типи транзацкій
  DEPOSIT: 'deposit', // покласти гроші на рахунок
  WITHDRAW: 'withdraw', // зняти гроші з рахунку
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  balance: 0, // Поточний баланс рахунку
  transactions: [], // Історія транзакцій

  createTransaction(amount, type) {
    // Приймає суму і тип транзакції.
    // Метод створює і повертає об'єкт транзакції.
    const transactionObject = {
      id: this.transactions.length + 1,
      type,
      amount,
    };
    return transactionObject;
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return alert(`
      Операція неможлива!
      Недостатньо коштів на балансі.
      Баланс: ${this.balance}`);
    }
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW),
    );
    this.balance -= amount;
  },
  getBalance() {
    // Метод повертає поточний баланс
    return this.balance;
  },
  getTransactionDetails(id) {
    // Метод шукає і повертає об'єкт транзакції по id
    for (const transaction of this.transactions) {
      if (transaction.id === +id) {
        return transaction;
      }
    }
  },
  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let transactionTotal = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        transactionTotal += transaction.amount;
      }
    }
    return transactionTotal;
  },
};

const buttonTaskSevenBalance = document.getElementById('task-seven-balance');
buttonTaskSevenBalance.addEventListener('click', () => {
  alert(account.getBalance());
});

const buttonTaskSevenDeposit = document.getElementById('task-seven-deposit');
buttonTaskSevenDeposit.addEventListener('click', () => {
  account.deposit(+prompt('Введіть суму:'));
});

const buttonTaskSevenWithdraw = document.getElementById('task-seven-withdraw');
buttonTaskSevenWithdraw.addEventListener('click', () => {
  account.withdraw(+prompt('Введіть суму:'));
});

const buttonTaskSevenId = document.getElementById('task-seven-id');
buttonTaskSevenId.addEventListener('click', () => {
  const transaction = account.getTransactionDetails(
    +prompt('Введіть номер транзакції:'),
  );
  alert(
    `ID: ${transaction.id}, тип транзакції: ${transaction.type}, сума: ${transaction.amount}`,
  );
});

const buttonTaskSevenDepositSum = document.getElementById(
  'task-seven-deposit-sum',
);
buttonTaskSevenDepositSum.addEventListener('click', () => {
  alert(
    `В загальному покладено на рахунок: ${account.getTransactionTotal(
      'deposit',
    )}`,
  );
});

const buttonTaskSevenWithdrawSum = document.getElementById(
  'task-seven-withdraw-sum',
);
buttonTaskSevenWithdrawSum.addEventListener('click', () => {
  alert(`Усього знято з рахунку: ${account.getTransactionTotal('withdraw')}`);
});
