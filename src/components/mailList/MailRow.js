import React from 'react'
import './MailRow.scss'
import { IconButton, Popover } from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { CheckBoxOutlineBlank } from '@material-ui/icons'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mailDetails } from '../../actions/mailActions';

export const MailRow = ({ id, title, subject, description, timeMessage }) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const mailDetail = () => {
        dispatch(
            mailDetails(
                { id, title, subject, description, timeMessage }
            )
        )
        history.push('/mail')
    }

    return (
        <div onClick={mailDetail} className="emailRow">
            <div className="emailRow_options">
                <IconButton>
                    <CheckBoxOutlineBlank />
                </IconButton>
                <IconButton>
                    < StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <div className="emailRow_title">
                {title}
            </div>
            <div className="emailRow_message">
                <h4>{subject}
                    <span className="emailRow_desc">{description}</span>
                </h4>
            </div>
            <p className="emailRow_time">
                {timeMessage}</p>

        </div>
    )
}
