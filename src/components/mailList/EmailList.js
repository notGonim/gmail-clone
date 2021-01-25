import { IconButton } from '@material-ui/core'
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import React, { useEffect, useState } from 'react'
import './EmailList.scss'
import { Section } from './Section';
import { MailRow } from './MailRow';
import { db } from '../../firebase';



export const EmailList = () => {

    const [emails, setEmails] = useState([])

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc')
            .onSnapshot(snapShot => setEmails(snapShot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))))
    }, [])

    return (
        <div className="emailList">
            <div className="emailList_setting">
                <div className="emailList_setting__left">
                    <IconButton>
                        <CheckBoxOutlineBlank />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList_setting_right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList_section">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>
            <div className="emailList_list">
                {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
                    < MailRow id={id} key={id} title={to} subject={subject}
                        description={message} timeMessage={new Date(timestamp?.seconds * 1000).toUTCString()} />
                ))}
            </div>
        </div>
    )
}
