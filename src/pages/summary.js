
import React from "react";

function Summary({ expenses }) {
  const totalSpent = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const categories = ["Food", "Travel", "Bills", "Fun"];

  const categoryTotals = expenses.reduce(
    (totals, expense) => {
      totals[expense.category] += expense.amount;
      return totals;
    },
    {
      Food: 0,
      Travel: 0,
      Bills: 0,
      Fun: 0
    }
  );

  return (
    <div>
      <h2>Expense Summary</h2>

      <h3>Total Spent: ₹{totalSpent}</h3>

      <h3>Category Wise Expenses</h3>

      {categories.map((category) => (
        <p key={category}>
          {category}: ₹{categoryTotals[category]}
        </p>
      ))}
    </div>
  );
}

export default Summary;
