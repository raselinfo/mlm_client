import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = (props) => {
    const { children, ...rest } = props;
    let storageEmail = localStorage.getItem("email")
    let { user } = useAuth()
    let email
    if (!user.email) {
        email = storageEmail
    } else {
        email = user.email
    }

    return (
        <Route
            {...rest}
            render={({ location }) => email ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivetRoute;