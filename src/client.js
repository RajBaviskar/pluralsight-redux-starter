import React from 'react';
import { render} from 'react-dom';
import App from '../components/App';

render (
    //define the encomposing component,
    // dom element we want ocmount it to
    <App/>,
    document.getElementById('app') 
);