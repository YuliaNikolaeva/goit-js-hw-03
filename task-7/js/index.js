'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],
  id: 0,

  deposit(amount) {
    this.balance = this.balance + amount;
    const transaction = {
      id: this.id += 1,
      type: Transaction.DEPOSIT,
      amount,
    };
    this.addTransaction(transaction);

    return `Счет пополнен на ${amount} грн`;
  },

  withdraw(amount) {
    const transaction = {
      id: this.id += 1,
      type: Transaction.WITHDRAW,
      amount,
    };

    return amount > this.balance ? 
    `Для снятия ${amount} грн недостаточно средств` :
    (this.addTransaction(transaction),
    this.balance = this.balance - amount,
    `Выдано ${amount} грн`);
  },

  addTransaction(transaction) {
      this.transactions.push(transaction);
  },

  getBalance() {
     return this.balance;
  },

  getTransactionDetails(findId) {
      const findByID = this.transactions.reduce((acc, transaction, inx) => {
      findId === transaction.id ? acc.push(transaction) : {};

      return acc;
    }, []);

    return findByID;
  },

  getTransactionTotal(findType) {
    const findByType = this.transactions.reduce((acc, transaction, inx) => {
    return transaction.type === findType ? acc + transaction.amount : acc;
  }, 0);

  return findByType;
  },
};


console.log('Начальный баланс:', account.getBalance()); // Статус баланса
console.log(account.deposit(50)); // Пополнение счета
console.log(account.deposit(100)); // Пополнение счета
console.log('Баланс после пополнения:', account.getBalance()); //Статус баланса
console.log(account.withdraw(60)); // Снятие денег 
console.log('Баланс после пополнения:', account.getBalance()); //Статус баланса
console.log(account.deposit(200)); // Пополнение счета
console.log('Баланс после пополнения:', account.getBalance()); //Статус баланса
console.log(account.withdraw(800)); // Снятие денег
console.log(account.withdraw(50)); // Снятие денег 
console.log(account.withdraw(20)); // Снятие денег 

console.log('Баланс после снятия денег:', account.getBalance()); //Статус баланса

console.log('Поиск транзакции по id', account.getTransactionDetails(2)); // Поиск транзакции
console.log('Сумма всех депозитных оперпций', account.getTransactionTotal('deposit')); // Сумма всех депозитных оперпций
console.log('Сумма всех оперпций снятия', account.getTransactionTotal('withdraw')); // Сумма всех оперпций снятия


