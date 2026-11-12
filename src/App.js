
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

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
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <ExpenseForm onAddExpense={handleAddExpense} />

      <hr />

      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
