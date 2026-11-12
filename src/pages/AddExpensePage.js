
import React, { useContext } from "react";
import ExpenseForm from "../ExpenseForm";
import { ExpenseContext } from "../ExpenseContext";

function AddExpensePage() {
  const { addExpense } = useContext(ExpenseContext);

  return (
    <div>
      <h2>Add New Expense</h2>

      <ExpenseForm onAddExpense={addExpense} />
    </div>
  );
}

export default AddExpensePage;
