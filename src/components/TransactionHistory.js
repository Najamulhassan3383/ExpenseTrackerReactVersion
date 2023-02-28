import React from "react";
import TransactionList from "../TransactionList";

export default function TransactionHistory({ dumm, handleDel }) {
  const handle = (e) => {
    console.log(e);
    handleDel(e);
  };

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        <TransactionList dummy={dumm} handledelete={handle} />
      </ul>
    </div>
  );
}
