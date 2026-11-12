
import React from "react";
import ExpenseForm from "../ExpenseForm";

function AddExpensePage({ onAddExpense }) {
  return (
    <div>
      <h2>Add New Expense</h2>

      <ExpenseForm onAddExpense={onAddExpense} />
    </div>
  );
}

export default AddExpensePage;
