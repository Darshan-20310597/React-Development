import React from'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import Task from './components/Task'
import AddTasks from './components/AddTask'
//comments

// if we want to use a boolean or a number, we must make use of the {}
function App() {
  const [task, setTasks] = useState([
    {
        id:1,
        text:'Doctors appointment ',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text:'Online Class ',
        day: 'Feb 8th at 8:30am',
        reminder: true,
    },
    {
        id:3,
        text:'NBA Games ',
        day: 'Feb 10th at 7:30pm',
        reminder: true,
    },
    {
        id:4,
        text:'Date',
        day: 'Feb 5th at 8:30pm',
        reminder: false,
    },
])

// We create functions here to access and change the states of the tasks -> next shoudl try with context api
// Delete tasks

const deleteTask = (id)=>{
  setTasks(task.filter((task)=> task.id !==id ))
}
//Toggle Reminder 
const toggleReminder = (id)=>{
  setTasks(task.map((task)=>  task.id === id ? {...task,reminder: !task.reminder}:task))

}

return (
    <div className='container'>
      <Header  />
      <AddTasks />
      {task.length > 0 ? (
      <Tasks tasks={task} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks Enjoy')}
    </div>
  )
}

export default App
