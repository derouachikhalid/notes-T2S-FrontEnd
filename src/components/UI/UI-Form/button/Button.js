import React from 'react';

import "./Button.css"
const Button = (props) => {
    return (
        <button className='ActionButton' onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;
