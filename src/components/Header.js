import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({title}) => {
    const onClick = ()=>{
        console.log('Click');

    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button  color='green' text='Todo-list' onClick={onClick}/> 
            {/* <Button  color='red' text='Todo-list1'/> 
            <Button  color='blue' text='Todo-list2'/> 
            <Button  color='yellow' text='Todo-list3'/>  */}
            {/* We can pass props in the button   Un comment the above buttons and it shows the reuseable component*/}
        </header>
    )
}

Header.defaultProps ={
    title:'Task Manager'
}
// CSS in JS
// const headerStyles = {
//     fontSize:'100px',
//     color:'red',

// } 

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
