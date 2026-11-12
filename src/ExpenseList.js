
import React from "react";

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expense List</h2>

      {expenses.map((expense) => (
        <div
          key={expense.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h3>{expense.title}</h3>
          <p>Amount: ₹{expense.amount}</p>
          <p>Category: {expense.category}</p>
          <p>Date: {expense.date || "Not provided"}</p>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
