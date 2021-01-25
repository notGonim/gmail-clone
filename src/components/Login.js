import { Button } from '@material-ui/core'
import React from 'react'
import { LogInAction } from '../actions/UserAction'
import { auth, provider } from '../firebase'
import './login.scss'
import { useDispatch } from 'react-redux';


export const Login = () => {
    const dispatch = useDispatch()
    const signin = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            dispatch(LogInAction(
                {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }
            ))
        }).catch(err => alert(err.message))
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63" alt="" srcset="" />
                <Button variant="contained" color="primary" onClick={signin}>Login</Button>
            </div>
        </div>
    )
}



