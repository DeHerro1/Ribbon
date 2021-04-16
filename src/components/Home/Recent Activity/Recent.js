import React from 'react';
import './Recent.css';

const Recent = ({Icon, recentText , number}) => {
    return (
        <div className="recent">
            <Icon className="recent_icon" />
            <p> {recentText} </p>
            <p> {number} </p>
        </div>
    )
}

export default Recent;
