import React, {ChangeEvent, useState} from 'react';
import SuperInputText from '../../../1-main/1-ui/common/SuperInputText/SuperInputText';
import SuperCheckbox from '../../../1-main/1-ui/common/SuperCheckbox/SuperCheckbox';
import SuperButton from '../../../1-main/1-ui/common/SuperButton/SuperButton';
import {NavLink, Redirect} from 'react-router-dom';
import {PATH} from '../../../1-main/1-ui/routes/Routes';
import style from './Login.module.css'
import {loginSuccess} from '../../../1-main/2-bll/authReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../1-main/2-bll/store';

function Login() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const error = useSelector<AppRootStateType, string>(state => state.auth.error)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.auth.isLoading)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const rememberMeHandler = () => setRememberMe(!rememberMe)
    const loginHandler = () => {
        dispatch(loginSuccess({email, password, rememberMe}))
    }
    if(isLoggedIn){
        return <Redirect to={'/profile'} />
    }
    return (
        <div className={style.loginBlock}>
            <h1>Login</h1>
            {isLoading ? <div style={{color: 'green'}}>Loading...</div> : ''}
            <SuperInputText value={email} onChange={emailHandler}/>
            <SuperInputText value={password} onChange={passwordHandler}/>
            <SuperCheckbox checked={rememberMe} onClick={rememberMeHandler}>Remember me</SuperCheckbox>
            <NavLink to={PATH.RESET_PASSWORD}>forgot</NavLink>
            <SuperButton onClick={loginHandler}>Login</SuperButton>
            <NavLink to={PATH.SIGN_UP}>sign up</NavLink>
            {error ? <div style={{color: 'red'}}>{error}</div> : ''}
        </div>
    );
}

export default Login;
