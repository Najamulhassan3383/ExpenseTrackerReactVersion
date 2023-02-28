import React from "react";

export default function IncomeExpense(props) {
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${props.in}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${props.ex}</p>
        </div>
      </div>
    </div>
  );
}
