import React from "react";

export default function TransactionList({ dummy, handledelete }) {
  //create a function to handle the delete button

  return (
    <div>
      {dummy.map((item) => (
        <li key={item.id} className={item.amount < 0 ? "minus" : "plus"}>
          {item.text} <span>${item.amount}</span>
          <button
            className="delete-btn"
            value={item.id}
            onClick={() => handledelete(item.id)}
          >
            x
          </button>
        </li>
      ))}
    </div>
  );
}
