import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../1-main/2-bll/store";
import {setNewPasswordTC} from "../../../1-main/2-bll/restoreReducer";
import {Redirect, useParams} from "react-router-dom";
import {PATH} from "../../../1-main/1-ui/routes/Routes";

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
        <div>
            <h1>It-incubator</h1>
            <h2>Create new password</h2>
            <input type="password" value={newPassword} onChange={onChangeNewPassword}/>
            <p>Create new password and we will send you further instructions to email</p>
            <button onClick={submitNewPassword}>Create new password</button>
        </div>
    );
}

export default NewPassword;
