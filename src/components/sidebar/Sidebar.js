import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox';
import React from 'react'
import './sidebar.scss'
import { SidebarOptions } from './SidebarOptions'
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { OpenMessage } from '../../actions/mailActions';
import { useDispatch } from 'react-redux';

export const Sidebar = () => {

    const dispatch = useDispatch()

    return (
        <div className="sidebar">
            <Button className="btn_compose"
                startIcon={<AddIcon fontSize="large"
                />} onClick={() => dispatch(OpenMessage())}>
                COMPOSE</Button>
            <SidebarOptions Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOptions Icon={StarIcon} title="Starred" number={54} />
            <SidebarOptions Icon={AccessTimeIcon} title="Snoozed" number={54} />
            <SidebarOptions Icon={LabelImportantIcon} title="Important" number={54} />
            <SidebarOptions Icon={NearMeIcon} title="Sent" number={54} />
            <SidebarOptions Icon={NoteIcon} title="Drafts" number={54} />
            <SidebarOptions Icon={ExpandMoreIcon} title="More" number={54} />

            <div className="sidebar_footer">
                <div className="sidebar_footer_icons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
