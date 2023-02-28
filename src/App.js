// import logo from './logo.svg';
import Header from "./components/Header";
import "./App.css";
import Balence from "./components/Balence";
import IncomeExpense from "./components/IncomeExpense";
import TransactionHistory from "./components/TransactionHistory";
import AddNewTransaction from "./components/AddNewTransaction";
import { useState } from "react";

function App() {
  const dummyTransactions = [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ];

  //create a function that will calculate the total amount
  const [transactions, setTransactions] = useState(dummyTransactions);
  const [amount, setAmount] = useState(() => {
    let total = 0;
    transactions.forEach((transaction) => {
      total += transaction.amount;
    });
    return total;
  });

  const [income, setIncome] = useState(() => {
    let total = 0;
    transactions.forEach((transaction) => {
      if (transaction.amount > 0) {
        total += transaction.amount;
      }
    });
    return total;
  });

  const [expense, setExpense] = useState(() => {
    let total = 0;
    transactions.forEach((transaction) => {
      if (transaction.amount < 0) {
        total += transaction.amount;
      }
    });
    return total;
  });

  //create a function that will add a new transaction
  const addTransaction = (newTransaction) => {
    // create a new transaction object with a unique id
    const transaction = {
      id: Math.random(),
      ...newTransaction,
    };

    // add the new transaction to the existing transactions array
    const newTransactions = [...transactions, transaction];
    setTransactions(newTransactions);

    // recalculate the values of income, expense, and amount based on the new transactions array
    const newExpense = newTransactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    setExpense(newExpense);

    const newIncome = newTransactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    setIncome(newIncome);

    const newAmount = newTransactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    setAmount(newAmount);
  };

  //create a function that will delete a transaction
  const deleteTransaction = (id) => {
    const newArray = transactions.filter(
      (transaction) => transaction.id !== id
    );

    setTransactions(newArray);

    const newExpense = newArray
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    setExpense(newExpense);

    const newIncome = newArray
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    setIncome(newIncome);

    const newAmount = newArray.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    setAmount(newAmount);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Balence amount={amount} />
        <IncomeExpense in={income} ex={expense} />
        <TransactionHistory dumm={transactions} handleDel={deleteTransaction} />
        <AddNewTransaction handleAdd={addTransaction} />
      </div>
    </div>
  );
}

export default App;
