
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import AddExpensePage from "./pages/AddExpensePage";
import ExpensesPage from "./pages/ExpensesPage";
import Summary from "./pages/summary";
import NotFound from "./pages/Notfound";

import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Lunch",
      amount: 150,
      category: "Food",
      date: "2026-11-10"
    },
    {
      id: 2,
      title: "Bus Ticket",
      amount: 40,
      category: "Travel",
      date: "2026-11-11"
    },
    {
      id: 3,
      title: "Electricity Bill",
      amount: 800,
      category: "Bills",
      date: "2026-11-12"
    }
  ]);

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        ...newExpense,
        id: Date.now()
      }
    ]);
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <AddExpensePage onAddExpense={handleAddExpense} />
          }
        />

        <Route
          path="/expenses"
          element={<ExpensesPage expenses={expenses} />}
        />

        <Route
          path="/summary"
          element={<Summary expenses={expenses} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
