import React from 'react'
import { useDispatch } from 'react-redux'
import { togglecomplete, tododelete } from '../app/createslice'

function Todoitem({ id, title, completed }) {
    const dispatch = useDispatch()
    const handleCheck = () => {
        // compare the current id and payload id and reverse 
        dispatch(
            togglecomplete({ id: id, completed: !completed })
        )
    }

    const handleDelete = () => {
        dispatch(
            // compare the id and filter
            tododelete({ id: id })
        )
    }

    return (
        <div className='container' >
            <div className='row mx-sm-3 ms-lg-3'>
                <div className='col-12 col-md-6 mb-5' key={id}>
                    <div className='card shadow rounded bg-light text-black p-4 'key={id}>
                        <div className='card-body ' >
                            <p className='fs-3 fw-bold'>{title}</p>
                            <span className='d-flex align-items-center '>
                                <input
                                    type='checkbox'
                                    className='me-3 form-check-input'
                                    checked={completed}
                                    onChange={handleCheck}
                                />
                                <span>Status</span>
                            </span>
                            <button className='btn btn-danger mt-4 fw-bold' onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todoitem
