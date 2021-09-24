import React, {useState} from 'react';
import SuperButton from "./sign-up-common/SuperButton/SuperButton";
import SuperInputText from "./sign-up-common/SuperInputText/SuperInputText";
import style from './SignUp.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setSignUpErrorAC, signUpTC} from "../../../1-main/2-bll/signUpReducer";
import {AppRootStateType} from "../../../1-main/2-bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../1-main/1-ui/routes/Routes";

function SignUp() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType>((state) => state.signUp.isLoggedIn)
    const signUpError = useSelector<AppRootStateType, string | null>(state => state.signUp.error)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const onSignUp = () => {
        password === confirmPassword
            ? dispatch(signUpTC(email, password))
            : dispatch(setSignUpErrorAC('Password mismatch'))
    }

    const handleSubmit = () => {
        onSignUp()
    }
    const onCancel = () => {
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        dispatch(setSignUpErrorAC(''))
    }

    return (
        <div className={style.signUpContainer} onSubmit={handleSubmit}>
            {isLoggedIn && <Redirect to={PATH.LOGIN}/>}
            <form className={style.signUpForm}>
                <div>
                    <h3>Create a new account</h3>
                    {signUpError && <span className={style.error}>{signUpError}</span>}
                </div>
                <div>
                    <SuperInputText
                        value={email}
                        onChangeText={setEmail}
                        onEnter={onSignUp}
                        type={'text'}
                        placeholder={'Email'}
                    />
                    <SuperInputText
                        value={password}
                        onChangeText={setPassword}
                        onEnter={onSignUp}
                        type={'Password'}
                        placeholder={'Password'}
                    />
                    <SuperInputText
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        onEnter={onSignUp}
                        type={'Password'}
                        placeholder={'Confirm Password'}
                    />
                </div>
                <div className={style.buttonsContainer}>
                    <SuperButton type={'button'} onClick={onCancel} color={'white'}>Cancel</SuperButton>
                    <SuperButton type={'submit'} color={'blue'}>Register</SuperButton>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
