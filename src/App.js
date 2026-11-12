
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import AddExpensePage from "./pages/AddExpensePage";
import ExpensesPage from "./pages/ExpensesPage";
import Summary from "./pages/summary";
import NotFound from "./pages/Notfound";

import ExpenseProvider from "./ExpenseContext";
import BudgetProvider from "./BudgetContext";

import "./App.css";

function App() {
  return (
    <BudgetProvider>
      <ExpenseProvider>
        <div className="app">
          <h1>Expense Tracker</h1>

          <Navbar />

          <Routes>
            <Route path="/" element={<AddExpensePage />} />

            <Route path="/expenses" element={<ExpensesPage />} />

            <Route path="/summary" element={<Summary />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ExpenseProvider>
    </BudgetProvider>
  );
}

export default App;
