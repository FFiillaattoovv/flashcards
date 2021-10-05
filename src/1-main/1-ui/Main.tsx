import React from 'react';
import Header from './header/Header';
import Routes from './routes/Routes';
import {AppRootStateType} from '../2-bll/store';
import {useSelector} from 'react-redux';
import UnauthorizedRoutes from "./routes/UnauthorizedRoutes";

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
                        <UnauthorizedRoutes/>
                    </div>
            }
        </div>
    );
}

export default Main;
