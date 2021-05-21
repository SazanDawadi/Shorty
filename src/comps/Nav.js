import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt1} from 'react-icons/hi';
import {AiOutlineLink} from 'react-icons/ai';
import "./Nav.css"

const Nav = () => {
    return (
        <nav>
            <NavLink className = "nav_link" to = '/'>
                <AiOutlineLink className="link_icon" />
                <p>Shorty</p>
                
                
            </NavLink>
            <HiMenuAlt1 className = "ham_menu"/>
        </nav>
    )
}

export default Nav
