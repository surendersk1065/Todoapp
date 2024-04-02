import React from 'react'

function Header() {
    const date = new Date()
    const Week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currWeek = Week[date.getDay()]
  return (

    <div className='bg-success text-white rounded-bottom'>
      <header className='container text-center p-4'>
        <p className='fs-1 fw-bold'>Today's Task</p>
        <p className='fs-3 '>{currWeek}, {date.getFullYear()}</p>
      </header>
    </div>
  )
}

export default Header
