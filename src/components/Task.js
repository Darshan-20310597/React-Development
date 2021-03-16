import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'red', cursor:'pointer'}} 
            onClick={()=>onDelete(task.id)} /> </h3>
            <p>{task.day}</p> 
            {/* Most important is to access the states of the button or icon to delete and add them it can be done using
            Redux and Context-api but here will do it with functions.    
            States gets passed down and actions get passed up */}
        </div>
    )
}

export default Task
