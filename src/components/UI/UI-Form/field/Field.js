import React from 'react';

import "./Field.css"
const Field = (props) => {

    let input;
    switch (props.type) {
        case "text":
            input = (<input 
                name={props.name} 
                value={props.value}
                placeholder={props.name}
                onChange={props.onChange}
                onBlur={props.onSubmit}
                disabled={props.disabled}
                required={props.required} />);
            break;
        case "text-area":
            input = (<textarea 
                name={props.name}
                placeholder={props.name} 
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onSubmit}
                disabled={props.disabled}
                required={props.required} />);
            break;
        case "date":
                input = (<input
                    type={props.type}
                    name={props.name}
                    placeholder={props.name} 
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onSubmit}
                    disabled={props.disabled}
                    required={props.required} />);
                break;
        case "number":
                input = (<input
                    type={props.type}
                    name={props.name}
                    placeholder={props.name} 
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onSubmit}
                    disabled={props.disabled}
                    required={props.required} />);
                break;
    
        case "enum":
            input = (<select 
                name={props.name} 
                placeholder={props.name}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onSubmit}
                disabled={props.disabled}
                required={props.required}>
                    {
                        props.options.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                    }

                    
                </select>);
            break;
    
        default:
            break;
    }
    return (
        <div className='Field'>
            <label >{props.label}</label>
            <span/>
            {input}
        </div>
    );
}

export default Field;
