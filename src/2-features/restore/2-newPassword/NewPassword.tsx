import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../1-main/2-bll/store";
import {setNewPasswordTC} from "../../../1-main/2-bll/restoreReducer";
import {Redirect, useParams} from "react-router-dom";
import {PATH} from "../../../1-main/1-ui/routes/Routes";
import style from "../Restore.module.css";
import SuperInputText from "../../1-auth/2-signUp/sign-up-common/SuperInputText/SuperInputText";
import SuperButton from "../../1-auth/2-signUp/sign-up-common/SuperButton/SuperButton";

function NewPassword() {

    const dispatch = useDispatch()
    const {token} = useParams<{ token: string }>()
    const changePasswordSuccess = useSelector<AppRootStateType, boolean>(state => state.restore.newPasswordSuccess)

    const [newPassword, setNewPassword] = useState('')

    const onChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.currentTarget.value)
    }

    const submitNewPassword = () => {
        dispatch(setNewPasswordTC(newPassword, token))
    }

    if (changePasswordSuccess) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div className={style.restoreContainer}>
            <form className={style.restoreForm} onSubmit={submitNewPassword}>
                <div>
                    <h3>Create new password</h3>
                </div>
                <div>
                    <SuperInputText
                        value={newPassword}
                        onChange={onChangeNewPassword}
                        onEnter={submitNewPassword}
                        type={'password'}
                        placeholder={'New password'}
                    />
                </div>
                <p>Create new password and log in with it afterwards</p>
                <div className={style.buttonsContainer}>
                    <SuperButton type={'submit'} color={'blue'}>Create new password</SuperButton>
                </div>
            </form>
        </div>
    );
}

export default NewPassword;
