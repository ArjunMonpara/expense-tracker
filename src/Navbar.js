
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Add Expense</NavLink>

      <NavLink to="/expenses">Expenses</NavLink>

      <NavLink to="/summary">Summary</NavLink>
    </nav>
  );
}

export default Navbar;
