
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ExpenseContext } from "./ExpenseContext";
import { BudgetContext } from "./BudgetContext";

function Navbar() {
  const { expenses } = useContext(ExpenseContext);
  const { budget } = useContext(BudgetContext);

  const totalSpent = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const remaining = budget - totalSpent;

  return (
    <nav className="navbar">
      <NavLink to="/">Add Expense</NavLink>

      <NavLink to="/expenses">Expenses</NavLink>

      <NavLink to="/summary">Summary</NavLink>

      <span
        style={{
          color: remaining < 0 ? "red" : "green",
          fontWeight: "bold"
        }}
      >
        Left: ₹{remaining}
      </span>
    </nav>
  );
}

export default Navbar;
