import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Storage from '../service/Storage.js';
const data = new Storage();
const newData = data.getItemsFromStorage();





const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {

    return (

        < Route
            {...rest}
            render={props => {
                if (!newData.email) return <Redirect to={{
                    pathname: '/signin',
                    state: { from: props.location }
                }} />;
                return Component ? <Component {...props} /> : render(props);
            }} />
    );
}

export default ProtectedRoute;
