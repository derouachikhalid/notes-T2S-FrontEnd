import React from 'react';
import "./StateButton.css"

const StateButton = (props) => {
    return (
        <button 
        style={props.style}
        className={`StateButton ${props.className}`}>   
        {props.icon}
        <span>
            {props.children.toUpperCase()}
        </span>  
        </button>
    );
};



export default StateButton;

