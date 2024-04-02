import React from 'react'
import Todoitem from './Todoitem'
import { useSelector } from 'react-redux'

function Todolist() {
  // select the state from the store
  const todos = useSelector((state) => state.todos)
  return (
    <div>
      <>
        {
          (todos.length) ? (
            <div key={todos.id}>
              {
                todos.map((val) => (
                  <Todoitem id={val.id} title={val.title} completed={val.completed} />
                ))
              }
            </div>

          )
            :
            (
              <p className='fs-3 text-center my-5'>No pending Task</p>
            )
        }
      </>
    </div>
  )
}

export default Todolist
