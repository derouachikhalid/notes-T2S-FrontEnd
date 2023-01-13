import React from 'react';
import ItemLinks from '../../../../UI/UI-Form/item-link/ItemLinks';

import "./MenuLinks.css"

const MenuLinks = (props) => {
    return (
        <div className='MenuLinks'>
            {
                props.links.map(item => <ItemLinks key={item.to} label={item.label} to={item.to} />)
            } 
        </div>
    );
}

export default MenuLinks;
