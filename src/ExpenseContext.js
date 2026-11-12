
import React, { createContext, useState } from "react";

export const ExpenseContext = createContext();

function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Groceries",
      amount: 1500,
      category: "Food",
      date: "2026-11-10"
    },
    {
      id: 2,
      title: "Bus Pass",
      amount: 1200,
      category: "Travel",
      date: "2026-11-11"
    },
    {
      id: 3,
      title: "Electricity",
      amount: 2000,
      category: "Bills",
      date: "2026-11-12"
    },
    {
      id: 4,
      title: "Movie",
      amount: 500,
      category: "Fun",
      date: "2026-11-12"
    }
  ]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        ...newExpense,
        id: Date.now()
      }
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
