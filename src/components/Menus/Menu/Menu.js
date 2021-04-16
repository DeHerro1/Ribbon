import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = ({active, link, Icon, text}) => {

    return (
        <div
            className={`menu ${active && 'active--state'}`}>
        <Link to={link}>
            <Icon className="menu_icon" />
            <p> {text} </p>
        </Link>
        </div>
    )
}

export default Menu;