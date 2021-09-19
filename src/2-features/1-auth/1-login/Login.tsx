import React from 'react';
import SuperInputText from '../../../1-main/1-ui/common/SuperInputText/SuperInputText';
import SuperCheckbox from '../../../1-main/1-ui/common/SuperCheckbox/SuperCheckbox';
import SuperButton from '../../../1-main/1-ui/common/SuperButton/SuperButton';
import { NavLink } from 'react-router-dom';
import {PATH} from '../../../1-main/1-ui/routes/Routes';

function Login() {
    return (
        <div className="App">
            <h1>Login</h1>
            <SuperInputText />
            <SuperInputText />
            <SuperCheckbox >Remember me</SuperCheckbox>
            <NavLink to={PATH.RESET_PASSWORD}>forgot</NavLink>
            <SuperButton >Login</SuperButton>
            <NavLink to={PATH.SIGN_UP}>sign up</NavLink>
        </div>
    );
}

export default Login;
