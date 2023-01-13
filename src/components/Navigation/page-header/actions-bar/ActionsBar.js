import React from 'react';

import "./ActionsBar.css"
import MenuActions from './menu-actions/MenuActions';
import MenuLinks from './menu-link/MenuLinks';
const ActionsBar = (props) => {
    return (
        <div className='ActionsBar'>
            <MenuLinks links={props.links} />
            <MenuActions actions={props.actions} />
        </div>
    );
}

export default ActionsBar;
