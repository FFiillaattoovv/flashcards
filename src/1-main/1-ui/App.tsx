import React from 'react';
import './App.module.css';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Main from './Main';
import {store} from '../2-bll/store';
import style from './App.module.css'

function App() {
    return (
        <div className={style.App}>
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
