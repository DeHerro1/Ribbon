import React from 'react';
import './Menus.css';
import Menu from './Menu/Menu';

import HouseIcon from '@material-ui/icons/House';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import ReorderIcon from '@material-ui/icons/Reorder';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import ArchiveIcon from '@material-ui/icons/Archive';
import { withRouter } from 'react-router';

const Menus = () => {
    return (
        <div className="menus">
            <Menu active link="/" Icon={HouseIcon} text="Home" />
            <Menu link="/Activity" Icon={AccountBalanceWallet} text="Activity" />
            <Menu link="/wallet" Icon={ReorderIcon} text="Wallet" />
            <Menu link="/market" Icon={MarkunreadIcon} text="Market" />
            <Menu link="/earn" Icon={ArchiveIcon} text="Earn" />
        </div>
    )
}

export default withRouter(Menus);