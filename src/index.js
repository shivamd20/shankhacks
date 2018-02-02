import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var initialState = {

    user : {
        authToken:null,
        userId:0,
        name : 'visitor',

       
    }

}

ReactDOM.render(<App state = {initialState} />, document.getElementById('root'));
registerServiceWorker();
