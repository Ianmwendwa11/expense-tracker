import React, { useState } from 'react'
import ExpenseTable from './ExpenseTable'

function SearchBar({ expenses, handleDelete }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
        />
      </div>
      <ExpenseTable filteredExpenses={filteredExpenses} handleDelete={handleDelete} />
    </div>
  )
}

export default SearchBar