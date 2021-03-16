import React from 'react'

const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
            {/* Each label is then bundled in a form control */}
            <label>Task</label>
            <input type='text' placeholder='Add tasks'/>
            </div>
            <div className='form-control'>
            {/* Each label is then bundled in a form control */}
            <label>Day and Time</label>
            <input type='text' placeholder='Add Dates'/>
            </div>
            <div className='form-control form-control-check'>
            {/* Each label is then bundled in a form control */}
            <label>Reminder</label>
            <input type='checkbox' defaultChecked='false'/>
            </div>  

            <input type='submit' value='Save taks' className='btn btn-block' />          
        </form>
    )
}

export default AddTask
