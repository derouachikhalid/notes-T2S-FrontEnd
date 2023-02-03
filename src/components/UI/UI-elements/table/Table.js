import React from 'react';
import Row from './row/Row';

import classes from "./Table.css"
const Table = (props) => {
    return (
        <table className={classes.Table}>
            <thead>
                
            </thead>
            <tbody>
            { (props.entries && props.fields) && props.entries.map(entry => <Row  key={entry.description} fields={props.fields} entry={entry} />)}
            </tbody>
            
        </table>
    );
}

export default Table;
