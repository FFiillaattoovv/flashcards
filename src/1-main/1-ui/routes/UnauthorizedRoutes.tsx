import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import Error404 from '../../../2-features/1-auth/2-signUp/sign-up-common/Error404/Error404';
import Login from '../../../2-features/1-auth/1-login/Login';
import SignUp from '../../../2-features/1-auth/2-signUp/SignUp';
import ResetPassword from '../../../2-features/restore/1-resetPassword/ResetPassword';
import NewPassword from '../../../2-features/restore/2-newPassword/NewPassword';
import CheckEmail from "../../../2-features/restore/1-resetPassword/CheckEmail";
import {PATH} from "./Routes";

function UnauthorizedRoutes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.LOGIN}/>}/>
                <Route path={PATH.SIGN_UP} render={() => <SignUp/>}/>
                <Route path={PATH.RESET_PASSWORD} render={() => <ResetPassword/>}/>
                <Route path={PATH.CHECK_EMAIL} render={() => <CheckEmail/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={'*'} render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default UnauthorizedRoutes
