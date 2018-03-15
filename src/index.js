import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './redux/store';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
//import routes from './routes';
//import './styles/styles.css'; // webpack can import CSS files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

let initialState = {
    todos: [
        {
            id: 0,
            completed: false,
            text: 'Initial todo for demo purpose'
        }
    ],
    user: {
        username: 'kurt',
        id: 13 
    }
};

let store  = configureStore(initialState);
//const store = configureStore();
render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);