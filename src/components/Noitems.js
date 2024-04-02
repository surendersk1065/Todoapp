import React from 'react'
import { useSelector } from 'react-redux'

function Noitems() {
    const todos = useSelector((state) => state.todos)
  return (
    <div>
      <p className='text-center fs-3'>Number of tasks pending {todos.length}</p>
    </div>
  )
}

export default Noitems
