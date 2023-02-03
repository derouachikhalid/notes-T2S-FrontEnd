import { faArrowLeft,faArrowUpRightFromSquare,faMinimize, faCheck, faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import "./OrderBar.css"
import IconButton from '../../../UI/UI-Form/icon-button/IconButton';
import StateButton from '../../../UI/UI-Form/state-button/StateButton';
import { Link } from 'react-router-dom';

const OrderBar = (props) => {
    const path = document.location.pathname;
    return (
        <div className='OrderBar'>
            <div className='LeftOrderSide'>
            <IconButton
            className="grey-icon-button"
            icon= {<FontAwesomeIcon icon={faArrowLeft}/>}
            />
            </div>
            <div className='MiddleOrderSide'>
                <span><IconButton
            className="warning-icon-button"
            icon= {<FontAwesomeIcon icon={faPen}/>}
            />
                </span>
            
            <Link to={path==="/notes" ?"/createNote" : "createReport"}>
            <span><IconButton
            className="success-icon-button"
            icon= {<FontAwesomeIcon icon={faPlus}/>}
            /></span>
            </Link>
            
            
<span><IconButton
            className="danger-icon-button"
            icon= {<FontAwesomeIcon icon={faTrash}/>}
            /></span>
            

            </div>
            <div className='RightOrderSide'>
            
            <StateButton
            className="StateButton"
            icon={<FontAwesomeIcon icon={faCheck}/>}
            >
                success
            </StateButton>

            <IconButton
            className="RectangleIconButton grey-icon-button"
            icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare}/>}
            />
            <IconButton
            className="RectangleIconButton grey-icon-button"
            icon={<FontAwesomeIcon icon={faMinimize}/>}
            />
            </div>
            
        </div>
    );
}

export default OrderBar;
