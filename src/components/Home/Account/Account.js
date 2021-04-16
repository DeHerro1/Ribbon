import React from 'react';
import './Account.css';

const Account = ({balance, name, text, styles, nameClass}) => {
    return (
        <div className={styles}>
            <div className={nameClass}>
                {name}
            </div>
            <p className="balance"> {balance} </p>
            <p className="text"> {text} </p>
        </div>
    )
}

export default Account;
