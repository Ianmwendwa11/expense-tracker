import React from 'react'

function ExpenseTable({ filteredExpenses = [], handleDelete }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
  {filteredExpenses.length > 0 ? (
    filteredExpenses.map((item) => (
      <tr key={item.id}>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>${item.amount}</td>
        <td>
          <button
            onClick={() => handleDelete(item.id)}
            className="delete-button"
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" style={{ textAlign: "center", padding: "10px" }}>
        No expenses found.
      </td>
    </tr>
  )}
</tbody>

      </table>
    </div>
  )
}

export default ExpenseTable
