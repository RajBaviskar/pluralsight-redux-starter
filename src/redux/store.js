
import reducer from './reducer';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
//import { createBrowserHistory } from './../../Library/Caches/typescript/2.6/node_modules/@types/history';

// Todo : add middleware
let finalCreateStore  = compose (
  applyMiddleware(logger())  
)(createStore);

export default function configureStore(initialState = {todos: []}) {
    return finalCreateStore(reducer, initialState);
}