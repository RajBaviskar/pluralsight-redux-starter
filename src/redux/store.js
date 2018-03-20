

import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
//import { createBrowserHistory } from './../../Library/Caches/typescript/2.6/node_modules/@types/history';

// Todo : add middleware
let finalCreateStore  = compose (
  applyMiddleware(thunk, logger())  
)(createStore);

export default function configureStore(initialState = {todos: [], user:{} }) {
    return finalCreateStore(rootReducer, initialState);
}