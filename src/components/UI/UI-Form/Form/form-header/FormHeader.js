import React from 'react';

import "./FormHeader.css"
const FormHeader = (props) => {
    return (
        <div className='FormHeader'>
            <i>{props.icon}</i>
            <span>{props.children}</span>
            
        </div>
    );
}

export default FormHeader;
