
import React, { useContext } from "react";
import { ExpenseContext } from "../ExpenseContext";
import { BudgetContext } from "../BudgetContext";

function Summary() {
  const { expenses } = useContext(ExpenseContext);

  const { budget, setBudget } = useContext(BudgetContext);

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

      <h3>Monthly Budget</h3>

      <input
        type="number"
        value={budget}
        onChange={(event) => setBudget(Number(event.target.value))}
      />

      <h3>Left: ₹{budget - totalSpent}</h3>

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
