import React from 'react';

import "./FormBody.css"
const FormBody = (props) => {
    return (
        <form className='FormBody'>
            {props.children}
        </form>
    );
}

export default FormBody;
