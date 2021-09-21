import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {forgotPasswordTC} from "../../../1-main/2-bll/restoreReducer";
import {AppRootStateType} from "../../../1-main/2-bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../1-main/1-ui/routes/Routes";

function ResetPassword() {

    const dispatch = useDispatch()
    const restoreEmailSendSuccess = useSelector<AppRootStateType, boolean>(state => state.restore.restoreEmailSendSuccess)

    const [emailAddress, setEmailAddress] = useState('')

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailAddress(e.currentTarget.value)
    }

    const submitEmail = () => {
        dispatch(forgotPasswordTC(emailAddress))
    }

    if (restoreEmailSendSuccess) {
        return <Redirect to={PATH.CHECK_EMAIL}/>
    }

    return (
        <div>
            <h1>It-incubator</h1>
            <h2>Forgot your password?</h2>
            <input type="email" value={emailAddress} onChange={onChangeEmail}/>
            <p>Enter your email address and we will send you further instructions</p>
            <button onClick={submitEmail}>Send Instructions</button>
            <p>Did you remember your password?</p>
            <a href={'/login'}>Try logging in</a>
        </div>
    );
}

export default ResetPassword;
