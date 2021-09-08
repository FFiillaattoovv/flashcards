import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Main from './Main';

function App() {
    return (
        <div className="App">
            <HashRouter>
                {/*<Provider store={store}></Provider>*/}
                <Main/>
            </HashRouter>
        </div>
    );
}

export default App;
