
import React from "react";
import ExpenseList from "../ExpenseList";

function ExpensesPage({ expenses }) {
  return (
    <div>
      <h2>All Expenses</h2>

      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default ExpensesPage;
