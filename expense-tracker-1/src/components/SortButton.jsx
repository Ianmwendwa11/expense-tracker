import React from 'react'

function SortButton({ expenses, setExpenses }) {
  const handleSort = () => {
    const sortedExpenses = [...expenses].sort((a, b) =>
      a.category.localeCompare(b.category)
    )
    setExpenses(sortedExpenses)
  }

  return (
    <div className="sort-container">
      <button onClick={handleSort}>Sort by Category</button>
    </div>
  )
}

export default SortButton