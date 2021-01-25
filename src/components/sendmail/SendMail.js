import React from 'react'
import './sendMail.scss'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { CloseMessage } from '../../actions/mailActions';

export const SendMail = () => {

    const { register, handleSubmit, watch, errors } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="sendMail">
            <div className="sendMailHeader">
                <h3>New Message</h3>
                <CloseIcon className="sendMail_close" onClick={() => dispatch(CloseMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type="email" placeholder="To" name="to"
                    ref={register({ required: true })} />
                {errors.to && <p className="sendMail_error">To is Required</p>}
                <input type="text" placeholder="Subject" name="subject"
                    ref={register({ required: true })} />
                {errors.subject && <p className="sendMail_error">Subject is Required</p>}


                <input type="text" placeholder="Message..." name="message"
                    ref={register({ required: true })}
                    className="sendMail_message" />
                {errors.message && <p className="sendMail_error">Message is Required</p>}



                <div className="sendMail_options">
                    <Button variant="contained" color="primary"
                        type="submit"
                        className="sendMail_send">Send</Button>
                </div>
            </form>
        </div>
    )
}
