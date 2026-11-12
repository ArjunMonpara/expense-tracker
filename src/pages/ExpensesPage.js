
import React, { useContext } from "react";
import { ExpenseContext } from "../ExpenseContext";

function ExpensesPage() {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <div>
      <h2>All Expenses</h2>

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

          <button onClick={() => deleteExpense(expense.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExpensesPage;
