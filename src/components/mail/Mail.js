import { IconButton } from '@material-ui/core'
import React from 'react'
import './Mail.scss'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';



export const Mail = () => {

    const history = useHistory()
    const { ...data } = useSelector(state => state.mail)
    const { id, title, subject, description, timeMessage } = data.selectMail
    console.log(timeMessage)

    return (
        <div className="mail">
            <div className="mail_tools">
                <div className="mail_tools__left">
                    <IconButton onClick={() => history.push('/')}>
                        <  ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        < MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        < ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <  DeleteIcon />
                    </IconButton>
                    <IconButton>
                        < EmailIcon />
                    </IconButton>
                    <IconButton>
                        <  WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        < CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail_tools__right">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        < PrintIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail_body">
                <div className="mail_body__header">
                    <h2>{subject}</h2>
                    <LabelImportantIcon className="mail_important" />
                    <p>{title}</p>
                    <p className="mail_time">{timeMessage}</p>
                </div>
                <div className="mail_message">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
