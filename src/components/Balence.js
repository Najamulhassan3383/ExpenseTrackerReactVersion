import React from "react";

export default function Balence({ amount }) {
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${amount}</h1>
    </div>
  );
}
