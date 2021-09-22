import React, {ChangeEvent, useState} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {PATH} from '../../../1-main/1-ui/routes/Routes';
import style from './Login.module.css'
import {loginSuccess} from '../../../1-main/2-bll/authReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../1-main/2-bll/store';
import SuperInputText from '../2-signUp/sign-up-common/SuperInputText/SuperInputText';
import SuperCheckbox from '../2-signUp/sign-up-common/SuperCheckbox/SuperCheckbox';
import SuperButton from '../2-signUp/sign-up-common/SuperButton/SuperButton';


function Login() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const errorFromStore = useSelector<AppRootStateType, string>(state => state.auth.error)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.auth.isLoading)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [error, setError] = useState('')

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {setEmail(e.currentTarget.value)}
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const rememberMeHandler = () => setRememberMe(!rememberMe)
    const loginHandler = () => {
        if(email !== '' && password !== '') {
            dispatch(loginSuccess({email, password, rememberMe}))
        } else {
            setError('Field is required!')
        }
    }
    const inputOnClickHandler = () => {
        setError('')
    }

    if(isLoggedIn){
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={style.loginBlock}>
            <div className={style.loginList}>
                <h1 className={style.loginTitle}>Login</h1>
                {isLoading ? <div style={{color: 'green'}}>Loading...</div> : ''}
                <SuperInputText className={style.loginInput} error={error}
                                placeholder={'Email'} value={email} onChange={emailHandler}
                                onClick={inputOnClickHandler}/>
                <SuperInputText className={style.loginInput} error={error}
                                placeholder={'Password'} value={password} onChange={passwordHandler}
                                onClick={inputOnClickHandler}/>
                <div className={style.rememberBlock}>
                    <SuperCheckbox className={style.loginCheckbox} checked={rememberMe} onClick={rememberMeHandler}>Remember me</SuperCheckbox>
                    <NavLink to={PATH.RESET_PASSWORD} className={style.forgotLink} activeClassName={style.forgotLincActive}>Forgot password</NavLink>
                </div>
                <SuperButton className={style.loginButton} onClick={loginHandler}>Login</SuperButton>
                <div className={style.loginText}>Don't have an account?</div>
                <NavLink to={PATH.SIGN_UP} className={style.signUpLink} activeClassName={style.signUpLinkActive}>Sign Up</NavLink>
                {errorFromStore ? <div style={{color: 'red'}}>{errorFromStore}</div> : ''}
            </div>
        </div>
    );
}

export default Login;
