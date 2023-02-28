import React from "react";
import { useState } from "react";
export default function AddNewTransaction({ handleAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    const newTransaction = {
      text: text,
      amount: +amount,
    };
    handleAdd(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={handleClick}>
          Add transaction
        </button>
      </form>
    </div>
  );
}
