import React from 'react';
import Button from '../../../../UI/UI-Form/button/Button';

const MenuActions = (props) => {
    return (
        <div className='MenuActions'>
            {
                props.actions.map(item => <Button key={item.label} onClick={item.onClick}>{item.label}</Button>)
            }
        </div>
    );
}

export default MenuActions;
