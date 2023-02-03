import React from 'react';
import Column from '../column/Column';

import classes from "./Row.css"
const Row = (props) => {
    return (
        <tr className={classes.Row}>
            {props.fields && props.fields.map(field => <Column key={field} >{props.entry[field]}</Column>)}
        </tr>
    );
}

export default Row;
