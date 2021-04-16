import React from 'react';
import './Home.css';
import AccountCircle from "@material-ui/icons/AccountCircle";
import Alarm from '@material-ui/icons/Notifications';
import LocalHospital from '@material-ui/icons/LocalHospitalSharp';
import AdbIcon from '@material-ui/icons/Adb';
import AdjustIcon from '@material-ui/icons/Adjust';
import AlbumIcon from '@material-ui/icons/Album';
import Account from './Account/Account';
import Button from './Button/Button';
import Recent from './Recent Activity/Recent';

const Home = () => {
    return (
        <div>
            <nav className="nav">
                <div className="nav_icons">
                    <LocalHospital className="nav_icon" />
                    <h1>ribbon</h1>
                </div>
                <div className="personal_info">
                    <AccountCircle className="nav_icon" />
                    <Alarm className="nav_icon" />
                </div>
            </nav>
            <div className="accounts">
                <Account 
                    name="AFYA"
                    styles="account left"
                    balance="143.00"
                    nameClass="name col1"
                    text="Balance"/>
                <Account 
                    name="ZAR"
                    styles="account right"
                    nameClass="name col2"
                    balance="R21.00"
                    text="Equivalent"/>
            </div>
            <div className="account_info">
            <div className="select_currency">
                <p>Select Currency:</p>
            </div>
            <div>
                <div className="amount">
                    <p className="account_name">AFYA</p>
                    <p className="number">0.000000001</p>
                </div>
            </div>
                <div className="buttons">
                    <Button type="SEND" />
                    <Button type="RECEIVE" />
                </div>
            </div>
            <div className="recents">
                    <h4>Recent Acitivity</h4>
                <div className="recents_list">
                <Recent 
                    Icon={AdjustIcon}
                    recentText='HIV Blood Draw Test'
                    number='A100'/>
                <Recent 
                    Icon={AdbIcon}
                    recentText='TB Radiology XRay'
                    number='A30'/>
                <Recent 
                    Icon={AlbumIcon}
                    recentText='Blood Pressure Check'
                    number='A10'/>
                </div>
            </div>
        </div>
    )
}

export default Home;
