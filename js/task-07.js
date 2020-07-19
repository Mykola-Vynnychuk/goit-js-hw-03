//  Напиши сценарій керування особистим кабінетом інтернет-банку.
//  Є об'єкт account в якому необхідно реалізувати методи для роботи
//з балансом та історією транзакцій.

const Transaction = { // Типи транзацкій
  DEPOSIT: 'deposit',  // покласти гроші на рахунок
  WITHDRAW: 'withdraw',  // зняти гроші з рахунку
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  balance: 10000,  // Поточний баланс рахунку
  transactions: [],  // Історія транзакцій

  createTransaction(amount, type) {  // Приймає суму і тип транзакції.
    // Метод створює і повертає об'єкт транзакції.
    id = this.transactions.length;
    type = type;
    amount = amount;
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    account.transactions.push(createTransaction(amount, 'deposit'));
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
      return alert(`Операція неможлива!
      Недостатньо коштів на балансі`);
    } 
    account.transactions.push(createTransaction(amount, 'withdraw'));
    this.balance -= amount;
  },
  getBalance() {  // Метод повертає поточний баланс
    return this.balance;
  },
  getTransactionDetails(id) {  // Метод шукає і повертає об'єкт транзакції по id
    for(const transaction of this.transactions)
    if (transaction.id === id) {
      return this.transactions.transaction;
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
        transactionTotal += this.transactions.amount;
      }
    }
    return transactionTotal;
  },
};

account.withdraw(100);
console.table(account.transactions);
