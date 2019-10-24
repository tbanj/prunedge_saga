import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Root from './App';
import * as serviceWorker from './serviceWorker';
import "./../node_modules/font-awesome/css/font-awesome.css";

import reducer from './store/reducer.js';
const store = createStore(reducer);

ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//{/* <Provider store={store}></Provider> */ }
serviceWorker.unregister();


