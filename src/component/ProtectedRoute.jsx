import React from 'react';
// import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Storage from '../service/Storage.js';
const data = new Storage();





const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {

    return (

        < Route
            {...rest}
            render={props => {
                debugger;
                if (!props.users.fullName) return <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />;
                return Component ? <Component {...props} /> : render(props);
            }} />
    );
}

export default ProtectedRoute;
