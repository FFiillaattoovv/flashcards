import React from 'react';
import style from './Header.module.css'

import {PATH} from "../routes/Routes";
import CustomNavLink from '../../../2-features/1-auth/2-signUp/sign-up-common/CustomNavLink/CustomNavLink';

function Header() {
    return (
        <div className={style.header}>
            <CustomNavLink title={'profile'} to={PATH.PROFILE}/>
            <CustomNavLink title={'sign-up'} to={PATH.SIGN_UP}/>
            <CustomNavLink title={'login'} to={PATH.LOGIN}/>
            {/*<CustomNavLink title={'new password'} to={PATH.NEW_PASSWORD}/>*/}
            <CustomNavLink title={'reset password'} to={PATH.RESET_PASSWORD}/>
            <CustomNavLink title={'test'} to={PATH.TEST}/>
        </div>
    );
}

export default Header;
