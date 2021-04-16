import React from 'react';
import './Button.css';

const Button = ({type}) => {
    return (
        <div className="button">
            {type}
        </div>
    )
}

export default Button;
