import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEllipsisVertical, faGear, faMagnifyingGlass, faQuestion } from '@fortawesome/free-solid-svg-icons';

import './NavBar.css'


const NavBar = () => {
    return (
        <nav className='app-nav-bar'>
            
            <div className='btn-dots'>
            
                <span>
                   <FontAwesomeIcon icon={faEllipsisVertical} />
                   <FontAwesomeIcon icon={faEllipsisVertical} />
                   <FontAwesomeIcon icon={faEllipsisVertical} />
                </span>
                   
                   
               
            <span>
                Dynamics 365 Business Central
            </span>
            </div>
            
            <ul>
                <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                <li><FontAwesomeIcon icon={faBell} /></li>
                <li><FontAwesomeIcon icon={faGear} /></li>
                <li><FontAwesomeIcon icon={faQuestion} /></li>
                <li>
                    <div className='navbar-avatar'>
                        
                    </div>
                </li>
            </ul>
            
        </nav>
    );
}

export default NavBar;
