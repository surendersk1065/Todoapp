import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../app/createslice'

function Taskinput() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(
        addtodo({
          title:value
        })
        
      )
      setValue('')
    }

   return (
    <div className=' text-center my-5'>
      <form onSubmit={handleSubmit}>
        <input 
            type='text'
            required
            placeholder='Add Your task'
            className='w-50 p-2 rounded mb-4'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        /><br></br>
        <button className='btn btn-success'>Add task + </button>
      </form>
    </div>
  )
}

export default Taskinput
