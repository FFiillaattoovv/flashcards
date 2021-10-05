import React from 'react';
import Header from './header/Header';
import Routes from './routes/Routes';
import Login from '../../2-features/1-auth/1-login/Login';
import {AppRootStateType} from '../2-bll/store';
import {useSelector} from 'react-redux';

function Main() {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)

    return (
        <div>
            {
                isAuth
                    ?
                    <div>
                        <Header/>
                        <Routes/>
                    </div>
                    :
                    <div>
                        <Login/>
                    </div>
            }
        </div>
    );
}

export default Main;
