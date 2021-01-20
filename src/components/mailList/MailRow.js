import React from 'react'
import './MailRow.scss'
import { IconButton, Popover } from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { CheckBoxOutlineBlank } from '@material-ui/icons'
import { useHistory } from 'react-router-dom';

export const MailRow = ({ title, subject, description, time }) => {

    const history = useHistory()


    return (
        <div onClick={() => history.push('/mail')} className="emailRow">
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
                {time}</p>

        </div>
    )
}
