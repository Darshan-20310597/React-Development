import React from 'react'
import PropTypes from 'prop-types';

const Button = ({color, text, onClick}) => {
    // let click = 0;
    // const onClick = () => {
    //     console.log('click' + click);
    //     click = click+1;
    // } 
    return (
        
        <button onClick={onClick} className='btn'>{text}</button>
       
    )
}

Button.defaultProps = {
    text:'Add Tasks',
    color:'black',
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,

}

export default Button
