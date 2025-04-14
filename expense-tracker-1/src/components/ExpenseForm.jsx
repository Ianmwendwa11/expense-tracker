import React, { useState } from 'react'

function ExpenseForm({ setExpenses, expenses }) {
  const [newExpense, setNewExpense] = useState({
    name: '',
    category: '',
    description: '',
    amount: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (newExpense.name && newExpense.category && newExpense.description && newExpense.amount) {
    const expenseWithId = {
      ...newExpense,
      id: Date.now(), 
      amount: parseFloat(newExpense.amount)
    };
    setExpenses([...expenses, expenseWithId]);
    setNewExpense({ name: '', category: '', description: '', amount: '' });
  } else {
    alert('Please fill out all of the fields.');
  }
};

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Expense Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newExpense.name}
          onChange={handleInputChange}
          placeholder="e.g. Gucci"
        />

        <label htmlFor="category">Expense Category</label>
        <input
          type="text"
          name="category"
          id="category"
          value={newExpense.category}
          onChange={handleInputChange}
          placeholder="e.g. clothes"
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={newExpense.description}
          onChange={handleInputChange}
          placeholder="e.g. Adding to my cloth collection"
        />

        <label htmlFor="amount">Amount (KSH)</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={newExpense.amount}
          onChange={handleInputChange}
          placeholder="e.g. 2000"
          min="0"
          step="0.01"
        />

        <button type="submit">Submit Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
