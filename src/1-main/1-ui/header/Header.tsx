import React from 'react';
import style from './Header.module.css'
import {PATH} from '../routes/Routes';
import CustomNavLink from '../../../2-features/1-auth/2-signUp/sign-up-common/CustomNavLink/CustomNavLink';
import SuperButton from '../../../2-features/1-auth/2-signUp/sign-up-common/SuperButton/SuperButton';
import {useDispatch} from 'react-redux';
import {logoutSuccess} from '../../2-bll/authReducer';
import {NavLink} from 'react-router-dom';

function Header() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutSuccess())
    }

    return (
        <div className={style.header}>
            <CustomNavLink title={'profile'} to={PATH.PROFILE}/>
            <CustomNavLink title={'sign-up'} to={PATH.SIGN_UP}/>
            <CustomNavLink title={'login'} to={PATH.LOGIN}/>
            {/*<CustomNavLink title={'new password'} to={PATH.NEW_PASSWORD}/>*/}
            <CustomNavLink title={'reset password'} to={PATH.RESET_PASSWORD}/>
            <CustomNavLink title={'cards'} to={PATH.CARDS}/>
            <CustomNavLink title={'test'} to={PATH.TEST}/>
            <NavLink to={'/login'}><SuperButton color={"blue"} onClick={logoutHandler}>logout</SuperButton></NavLink>
        </div>
    );
}

export default Header;
