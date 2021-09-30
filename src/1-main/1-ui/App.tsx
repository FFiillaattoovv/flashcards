import React, {useEffect} from 'react';
import './App.module.css';
import { useDispatch} from 'react-redux';
import Main from './Main';
import {getMe} from '../2-bll/authReducer';

// Initial commit

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    return (
        <div className="App">
            <Main />
        </div>
    )
}
export default App;