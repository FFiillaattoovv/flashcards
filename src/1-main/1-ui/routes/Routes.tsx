import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import Test from '../../../2-features/0-test/Test';
import Error404 from '../../../2-features/1-auth/2-signUp/sign-up-common/Error404/Error404';
import Login from '../../../2-features/1-auth/1-login/Login';
import SignUp from '../../../2-features/1-auth/2-signUp/SignUp';
import Profile from '../../../2-features/2-profile/Profile';
import ResetPassword from '../../../2-features/restore/1-resetPassword/ResetPassword';
import NewPassword from '../../../2-features/restore/2-newPassword/NewPassword';
import CheckEmail from "../../../2-features/restore/1-resetPassword/CheckEmail";
import Packs from "../../../2-features/3-packs/Packs";

export const PATH = {
    LOGIN: '/login',
    SIGN_UP: '/signup',
    PROFILE: '/profile',
    PACKS: '/packs',
    RESET_PASSWORD: '/resetPassword',
    CHECK_EMAIL: '/checkEmail',
    NEW_PASSWORD: '/newPassword/:token',
    CARDS: '/cards',
    TEST: '/test'
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.LOGIN}/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.SIGN_UP} render={() => <SignUp/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.PACKS} render={() => <Packs/>}/>
                <Route path={PATH.RESET_PASSWORD} render={() => <ResetPassword/>}/>
                <Route path={PATH.CHECK_EMAIL} render={() => <CheckEmail/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes
