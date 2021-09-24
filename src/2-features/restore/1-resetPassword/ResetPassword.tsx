import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {forgotPasswordTC} from "../../../1-main/2-bll/restoreReducer";
import {AppRootStateType} from "../../../1-main/2-bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../1-main/1-ui/routes/Routes";
import style from '../Restore.module.css';
import SuperInputText from "../../1-auth/2-signUp/sign-up-common/SuperInputText/SuperInputText";
import SuperButton from "../../1-auth/2-signUp/sign-up-common/SuperButton/SuperButton";

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
        <div className={style.restoreContainer}>
            <form className={style.restoreForm} onSubmit={submitEmail}>
                <div>
                    <h3>Forgot your password?</h3>
                </div>
                <div>
                    <SuperInputText
                        value={emailAddress}
                        onChange={onChangeEmail}
                        onEnter={submitEmail}
                        type={'text'}
                        placeholder={'Email'}
                    />
                </div>
                <div className={style.buttonsContainer}>
                    <SuperButton type={'submit'} color={'blue'}>Send instructions</SuperButton>
                </div>
            </form>
        </div>
    );
}

export default ResetPassword;
