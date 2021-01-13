import React from 'react'
import './header.scss'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
export const Header = () => {
    return (
        <div className="header_container">
            <div className="header_container__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
                    alt="" srcset="" />

            </div>
            <div className="header_container__middle">
                <SearchIcon />
                <input type="text" placeholder="Search mail" />
                <ArrowDropDownIcon className="header_inputCarte" />

            </div>
            <div className="header_container__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>


        </div>
    )
}
