import React, { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import SearchBar from './components/SearchBar'
import SortButton from './components/SortButton'

function App() {
  const [expenses, setExpenses] = useState([
    { name: 'Lunch', category: 'Food', description: 'Weekly Lunch', amount: 20 },
    { name: 'Uber Tokens', category: 'Transport', description: 'Add to my shoe collection', amount: 10 },
    { name: 'Bank Repayment', category: 'Bills', description: 'Power tokens', amount: 100 },
  ])

  const handleDelete = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete))
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm setExpenses={setExpenses} expenses={expenses} />
      <SearchBar expenses={expenses} handleDelete={handleDelete} />
      <SortButton expenses={expenses} setExpenses={setExpenses} />
    </div>
  )
}

export default App