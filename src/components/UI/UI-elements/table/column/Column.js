import React from 'react';

import classes from "./Column.css"
const Column = (props) => {
    return (
        <td className={classes.Column}>
            {props.children}
        </td>
    );
}

export default Column;
