import React, {ChangeEvent, useState} from 'react';
import SuperInputText from '../../../1-main/1-ui/common/SuperInputText/SuperInputText';
import SuperCheckbox from '../../../1-main/1-ui/common/SuperCheckbox/SuperCheckbox';
import SuperButton from '../../../1-main/1-ui/common/SuperButton/SuperButton';
import { NavLink } from 'react-router-dom';
import {PATH} from '../../../1-main/1-ui/routes/Routes';
import style from './Login.module.css'
import {loginSuccess} from '../../../1-main/2-bll/authReducer';
import {useDispatch} from 'react-redux';

function Login() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const rememberMeHandler = () => setRememberMe(!rememberMe)
    const loginHandler = () => {
        dispatch(loginSuccess({email, password, rememberMe}))
    }
    return (
        <div className={style.loginBlock}>
            <h1>Login</h1>
            <SuperInputText value={email} onChange={emailHandler}/>
            <SuperInputText value={password} onChange={passwordHandler}/>
            <SuperCheckbox checked={rememberMe} onClick={rememberMeHandler}>Remember me</SuperCheckbox>
            <NavLink to={PATH.RESET_PASSWORD}>forgot</NavLink>
            <SuperButton onClick={loginHandler}>Login</SuperButton>
            <NavLink to={PATH.SIGN_UP}>sign up</NavLink>
        </div>
    );
}

export default Login;
