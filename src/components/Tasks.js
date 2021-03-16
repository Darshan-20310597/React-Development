import React from 'react'
import Task from './Task'
// import {useState} from 'react'
// Uncomment the below to try without hooks - useState
// const tasks =[
//     {
//         id:1,
//         text:'Doctors appointment ',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id:2,
//         text:'Online Class ',
//         day: 'Feb 8th at 8:30am',
//         reminder: true,
//     },
//     {
//         id:3,
//         text:'NBA Games ',
//         day: 'Feb 10th at 7:30pm',
//         reminder: true,
//     },
//     {
//         id:4,
//         text:'Date',
//         day: 'Feb 5th at 8:30pm',
//         reminder: false,
//     },
// ]


const Tasks = ({tasks , onDelete , onToggle}) => {
    
    return (
        <>
           {tasks.map((task)=> (
           <Task key={task.id} task={task}  onDelete={onDelete} onToggle={onToggle}/>))} 
        </>
    )
}

export default Tasks
