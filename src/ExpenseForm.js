
import React, { useState, useRef } from "react";

const initialForm = {
  title: "",
  amount: "",
  category: "Food",
  date: ""
};

function ExpenseForm({ onAddExpense }) {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");

  const titleRef = useRef(null);
  const amountRef = useRef(null);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.title.trim() === "") {
      setMessage("Enter a title");
      titleRef.current.focus();
      return;
    }

    if (Number(form.amount) <= 0 || form.amount === "") {
      setMessage("Amount must be above 0");
      amountRef.current.focus();
      return;
    }

    onAddExpense({
      ...form,
      title: form.title.trim(),
      amount: Number(form.amount)
    });

    setForm(initialForm);
    setMessage("");
    titleRef.current.focus();
  };

  return (
    <div>
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            ref={titleRef}
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter expense title"
          />
        </div>

        <br />

        <div>
          <label>Amount: </label>
          <input
            ref={amountRef}
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Enter amount"
          />
        </div>

        <br />

        <div>
          <label>Category: </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Bills">Bills</option>
            <option value="Fun">Fun</option>
          </select>
        </div>

        <br />

        <div>
          <label>Date: </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>

        <br />

        <h3>Live Preview</h3>
        <p>
          {form.title || "Title"} - ₹{form.amount || "0"} - {form.category}
        </p>

        {message && <p style={{ color: "red" }}>{message}</p>}

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
